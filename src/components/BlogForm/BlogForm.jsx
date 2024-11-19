import React, { useState } from "react";

export default function BlogForm({ onSubmit }) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [status, setStatus] = useState("draft");

    const handleSubmit = (e) => {
        e.preventDefault();

        // evita post senza titoli 
        if (!title.trim()) return;

        onSubmit({
            id: Date.now(),
            title,
            author,
            status,
        });
        
        // reset dei campi
        setTitle("");
        setAuthor("");
        setStatus("draft");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                type="text"
                placeholder="Author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
            </select>
            <button type="submit">Add Article</button>
        </form>
    );
}