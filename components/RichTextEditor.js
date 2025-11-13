
"use client";
import dynamic from "next/dynamic";
import { useMemo } from "react";

const ReactQuill = dynamic(() => import("react-quill-new"), { ssr: false });

export default function RichTextEditor({ value, onChange, placeholder }) {
    const modules = useMemo(
        () => ({
            toolbar: [
                [{ header: [1, 2, 3, false] }],
                ["bold", "italic", "underline", "strike"],
                ["blockquote"],
                [{ list: "ordered" }, { list: "bullet" }],
                ["link", "image"],
                [{ align: [] }],
                ["clean"],
            ],
        }),
        []
    );

    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "link",
        "image",
        "align",
    ];

    const handleChange = (content, delta, source, editor) => {
        let html = editor.getHTML();

        // Convert empty paragraphs to <br/>
        html = html.replace(/<p><br><\/p>/g, "<br/>");

        onChange(html);
    };

    return (
        <div className="w-full p-2 border rounded">
            <ReactQuill
                theme="snow"
                value={value || ""}
                onChange={handleChange}
                modules={modules}
                formats={formats}
                placeholder={placeholder}
            />
        </div>
    );
}
