"use client";
import { useEffect, useMemo, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import RichTextEditor from "@/components/RichTextEditor";

const categories = [
  { name: "Business Stories", slug: "business_stories" },
  { name: "Financial Tips", slug: "financial_tips" },
  { name: "Leadership", slug: "leadership" },
  { name: "Entrepreneurship", slug: "entrepreneurship" },
  { name: "Productivity", slug: "productivity" },
  { name: "Personal Growth", slug: "personal_growth" },
];

const statuses = [
  { name: "Draft", value: "draft" },
  { name: "Published", value: "published" },
  { name: "Archived", value: "archived" },
];

const layoutTypes = [
  { name: "Standard", value: "standard" },
  { name: "Trending", value: "trending" },
  { name: "Big Blog", value: "big_blog" },
];

function slugify(str = "") {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

function readingTime(text) {
  const wordsPerMinute = 250; // average adult reading speed
  // Strip HTML tags to count only actual text
  const plainText = text.replace(/<[^>]*>/g, ' ');
  const words = plainText.trim().split(/\s+/).length;
  const time = Math.ceil(words / wordsPerMinute);
  return `${time} min`;
}

export default function EditorPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [q, setQ] = useState("");
  const [message, setMessage] = useState({ text: "", type: "" });

  // Form state
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState(categories[0].slug);
  const [content, setContent] = useState("");
  const [layoutType, setLayoutType] = useState("standard");
  const [status, setStatus] = useState("draft");
  const [coverImage, setCoverImage] = useState("");
  const [isFeatured, setIsFeatured] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  // Show message function
  const showMessage = (text, type) => {
    setMessage({ text, type });
    setTimeout(() => setMessage({ text: "", type: "" }), 4000);
  };

  // auto-generate slug from title if not manually edited
  useEffect(() => {
    if (!selectedId) setSlug(slugify(title));
  }, [title, selectedId]);

  // Handle image file selection and preview
  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setImageFile(file);

    // Create preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  async function loadPosts() {
    setLoading(true);
    const { data, error } = await supabase
      .from("blogs")
      .select("id, title, slug, category, content, cover_image, layout_type, status, is_featured, reading_time, published_at, created_at, updated_at")
      .order("created_at", { ascending: false });
    if (!error) setPosts(data || []);
    setLoading(false);
  }

  useEffect(() => {
    loadPosts();
  }, []);

  function resetForm() {
    setSelectedId(null);
    setTitle("");
    setSlug("");
    setCategory(categories[0].slug);
    setContent("");
    setLayoutType("standard");
    setStatus("draft");
    setCoverImage("");
    setIsFeatured(false);
    setImageFile(null);
    setImagePreview("");
  }

  function editPost(p) {
    setSelectedId(p.id);
    setTitle(p.title || "");
    setSlug(p.slug || "");
    setCategory(p.category || categories[0].slug);
    setContent(p.content || "");
    setLayoutType(p.layout_type || "standard");
    setStatus(p.status || "draft");
    setCoverImage(p.cover_image || "");
    setIsFeatured(!!p.is_featured);
    setImageFile(null);
    setImagePreview(p.cover_image || "");
  }

  async function savePost() {
    setSaving(true);

    let uploadedImageUrl = coverImage;

    // Upload image if a new file was selected
    if (imageFile) {
      setUploading(true);
      const fileName = `${Date.now()}_${imageFile.name}`;

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("cover_images")
        .upload(fileName, imageFile);

      if (uploadError) {
        console.error("Upload failed:", uploadError.message);
        showMessage("Failed to upload image: " + uploadError.message, "error");
        setSaving(false);
        setUploading(false);
        return;
      }

      const { data: publicData } = supabase.storage
        .from("cover_images")
        .getPublicUrl(fileName);

      uploadedImageUrl = publicData.publicUrl;
      setUploading(false);
    }

    const payload = {
      author_id: "76e8151a-205a-4291-9f0c-a08a26c41f46",
      title,
      slug: slug || slugify(title),
      category,
      content,
      cover_image: uploadedImageUrl,
      layout_type: layoutType,
      status,
      is_featured: isFeatured,
      reading_time: readingTime(content),
      published_at: status === "published" ? new Date().toISOString() : null,
      updated_at: new Date().toISOString(),
    };

    let result;
    if (selectedId) {
      result = await supabase.from("blogs").update(payload).eq("id", selectedId).select().single();
    } else {
      result = await supabase
        .from("blogs")
        .insert({ ...payload, created_at: new Date().toISOString() })
        .select()
        .single();
    }

    if (result.error) {
      console.error("Save failed:", result.error);
      showMessage("Failed to save post: " + result.error.message, "error");
    } else if (result.data) {
      await loadPosts();
      editPost(result.data);
      setImageFile(null); // Clear the file input after successful save
      showMessage("Post saved successfully!", "success");
    }

    setSaving(false);
  }

  async function deletePost(id) {
    if (!id) return;
    const ok = confirm("Delete this post?");
    if (!ok) return;
    const { error } = await supabase.from("blogs").delete().eq("id", id);
    if (error) {
      showMessage("Failed to delete post: " + error.message, "error");
    } else {
      showMessage("Post deleted successfully!", "error");
      await loadPosts();
      if (selectedId === id) resetForm();
    }
  }

  const filtered = useMemo(() => {
    const ql = q.trim().toLowerCase();
    if (!ql) return posts;
    return posts.filter(p => (p.title || "").toLowerCase().includes(ql) || (p.slug || "").toLowerCase().includes(ql));
  }, [q, posts]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Message Toast */}
      {message.text && (
        <div className={`fixed bottom-8 right-10 px-6 py-3 rounded-lg shadow-lg text-white font-medium z-50 transition-all ${message.type === "success" ? "bg-green-600" : "bg-red-600"
          }`}>
          {message.text}
        </div>
      )}

      <div className="md:col-span-1">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-semibold">Posts</h2>
          <button
            className="text-sm px-3 py-1.5 rounded bg-gray-900 text-white hover:bg-black"
            onClick={resetForm}
          >
            New
          </button>
        </div>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search posts..."
          className="w-full border rounded px-3 py-2 mb-3"
        />
        <div className="border rounded divide-y max-h-[70vh] overflow-auto">
          {loading && <div className="p-3 text-sm text-gray-500">Loading…</div>}
          {!loading && filtered.length === 0 && (
            <div className="p-3 text-sm text-gray-500">No posts</div>
          )}
          {filtered.map((p) => (
            <div key={p.id} className={`p-3 cursor-pointer hover:bg-gray-50 ${selectedId === p.id ? 'bg-gray-50' : ''}`}
              onClick={() => editPost(p)}
            >
              <div className="text-sm font-medium">{p.title || "Untitled"}</div>
              <div className="text-xs text-gray-500">/{p.slug}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="md:col-span-2">
        <h2 className="text-lg font-semibold mb-3">{selectedId ? 'Edit Post' : 'New Post'}</h2>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Title *</label>
              <input className="w-full border rounded px-3 py-2" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Post title" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Slug *</label>
              <input className="w-full border rounded px-3 py-2" value={slug} onChange={(e) => setSlug(e.target.value)} placeholder="post-slug" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Category *</label>
              <select className="w-full border rounded px-3 py-2" value={category} onChange={(e) => setCategory(e.target.value)}>
                {categories.map(c => (
                  <option key={c.slug} value={c.slug}>{c.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Status</label>
              <select className="w-full border rounded px-3 py-2" value={status} onChange={(e) => setStatus(e.target.value)}>
                {statuses.map(s => (
                  <option key={s.value} value={s.value}>{s.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Layout Type</label>
              <select className="w-full border rounded px-3 py-2" value={layoutType} onChange={(e) => setLayoutType(e.target.value)}>
                {layoutTypes.map(l => (
                  <option key={l.value} value={l.value}>{l.name}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Cover Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageSelect}
              className="w-full border rounded px-3 py-2"
            />
            {imagePreview && (
              <div className="mt-3">
                <p className="text-sm text-gray-600 mb-2">Preview:</p>
                <img
                  src={imagePreview}
                  alt="Cover preview"
                  className="w-full max-w-md h-48 object-cover rounded border"
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Content *</label>
            <RichTextEditor value={content} onChange={setContent} placeholder="Write your story…" />
            {content && (
              <div className="mt-2 text-sm text-gray-600">
                Estimated reading time: <span className="font-medium">{readingTime(content)}</span>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={isFeatured} onChange={(e) => setIsFeatured(e.target.checked)} />
              Featured Post
            </label>
            <div className="flex items-center gap-2">
              {selectedId && (
                <button className="px-3 py-2 rounded border border-red-500 text-red-600 hover:bg-red-50" onClick={() => deletePost(selectedId)}>
                  Delete
                </button>
              )}
              <button
                disabled={saving || uploading}
                className="px-4 py-2 rounded bg-gray-900 text-white hover:bg-black disabled:opacity-60"
                onClick={savePost}
              >
                {uploading ? 'Uploading…' : saving ? 'Saving…' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
