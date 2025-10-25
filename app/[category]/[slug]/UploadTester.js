"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function UploadTester() {
    const [imageUrl, setImageUrl] = useState("");

    const uploadImage = async (event) => {
        const file = event.target.files[0];
        if (!file) return;

        const fileName = `${file.name}_${Date.now()}`;

        const { data, error } = await supabase.storage
            .from("cover_images")
            .upload(fileName, file);

        if (error) {
            console.error("Upload failed:", error.message);
            return;
        }

        const { data: publicData } = supabase.storage
            .from("cover_images")
            .getPublicUrl(fileName);

        setImageUrl(publicData.publicUrl);
    };

    return (
        <div className="mb-8">
            <input type="file" accept="image/*" onChange={uploadImage} />
            {imageUrl && (
                <div className="mt-4">
                    <p>Uploaded Image:</p>
                    <img
                        src={imageUrl}
                        alt="Uploaded"
                        className="w-64 h-64 object-cover rounded"
                    />
                </div>
            )}
        </div>
    );
}
