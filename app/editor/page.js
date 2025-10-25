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

function slugify(str = "") {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function EditorPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [q, setQ] = useState("");

  // Form state
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [category, setCategory] = useState(categories[0].slug);
  const [excerpt, setExcerpt] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [content, setContent] = useState("");
  const [published, setPublished] = useState(false);

  // auto-generate slug from title if not manually edited
  useEffect(() => {
    if (!selectedId) setSlug(slugify(title));
  }, [title, selectedId]);

  async function loadPosts() {
    setLoading(true);
    const { data, error } = await supabase
      .from("posts")
      .select("id, title, slug, category, excerpt, cover_url, content, published, created_at, updated_at")
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
    setExcerpt("");
    setCoverUrl("");
    setContent("");
    setPublished(false);
  }

  function editPost(p) {
    setSelectedId(p.id);
    setTitle(p.title || "");
    setSlug(p.slug || "");
    setCategory(p.category || categories[0].slug);
    setExcerpt(p.excerpt || "");
    setCoverUrl(p.cover_url || "");
    setContent(p.content || "");
    setPublished(!!p.published);
  }

  async function savePost() {
    setSaving(true);
    const payload = {
      title,
      slug: slug || slugify(title),
      category,
      excerpt,
      cover_url: coverUrl,
      content,
      published,
      updated_at: new Date().toISOString(),
    };

    let result;
    if (selectedId) {
      result = await supabase.from("posts").update(payload).eq("id", selectedId).select().single();
    } else {
      result = await supabase
        .from("posts")
        .insert({ ...payload, created_at: new Date().toISOString() })
        .select()
        .single();
    }

    if (!result.error && result.data) {
      await loadPosts();
      editPost(result.data);
    }
    setSaving(false);
  }

  async function deletePost(id) {
    if (!id) return;
    const ok = confirm("Delete this post?");
    if (!ok) return;
    await supabase.from("posts").delete().eq("id", id);
    await loadPosts();
    if (selectedId === id) resetForm();
  }

  const filtered = useMemo(() => {
    const ql = q.trim().toLowerCase();
    if (!ql) return posts;
    return posts.filter(p => (p.title || "").toLowerCase().includes(ql) || (p.slug || "").toLowerCase().includes(ql));
  }, [q, posts]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
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
              <label className="block text-sm font-medium mb-1">Title</label>
              <input className="w-full border rounded px-3 py-2" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Post title" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Slug</label>
              <input className="w-full border rounded px-3 py-2" value={slug} onChange={(e)=>setSlug(e.target.value)} placeholder="post-slug" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Category</label>
              <select className="w-full border rounded px-3 py-2" value={category} onChange={(e)=>setCategory(e.target.value)}>
                {categories.map(c => (
                  <option key={c.slug} value={c.slug}>{c.name}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Cover Image URL</label>
              <input className="w-full border rounded px-3 py-2" value={coverUrl} onChange={(e)=>setCoverUrl(e.target.value)} placeholder="https://…" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Excerpt</label>
            <textarea className="w-full border rounded px-3 py-2 min-h-24" value={excerpt} onChange={(e)=>setExcerpt(e.target.value)} placeholder="Short summary" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Content</label>
            <RichTextEditor value={content} onChange={setContent} placeholder="Write your story…" />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" checked={published} onChange={(e)=>setPublished(e.target.checked)} />
              Published
            </label>
            <div className="flex items-center gap-2">
              {selectedId && (
                <button className="px-3 py-2 rounded border border-red-500 text-red-600 hover:bg-red-50" onClick={()=>deletePost(selectedId)}>
                  Delete
                </button>
              )}
              <button disabled={saving} className="px-4 py-2 rounded bg-gray-900 text-white hover:bg-black disabled:opacity-60" onClick={savePost}>
                {saving ? 'Saving…' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
