import React, { useState } from "react";
import ListCheckbox from "./ListCheckbox/ListCheckbox";

export default function BlogForm({ onSubmit }) {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [status, setStatus] = useState("Draft");
    const [img, setImg] = useState("");
    const [content, setContent] = useState('')
    const [tag, setTag] = useState([])
    const availableTags = ["Tech", "Lifestyle", "Education", "Entertainment"];

    const handleSubmit = (e) => {
        e.preventDefault();

        // evita post senza titoli 
        if (!title.trim()) return;

        onSubmit({
            id: Date.now(),
            title,
            author,
            img,
            content,
            status,
            tags: tag
        });

        // reset dei campi
        setTitle("");
        setAuthor("");
        setStatus("draft");
        setTag([])
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="container-input">
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
                <input
                    type="text"
                    placeholder="Image address"
                    value={img}
                    accept="image/png, image/jpeg"
                    onChange={(e) => setImg(e.target.value)}
                />
            </div>
            <div className="container-input">
                <input
                    type="text"
                    placeholder="Content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                </select>
                <button type="submit">Add Article</button>
            </div>
            <ListCheckbox availableTags={availableTags} tag={tag} setTag={setTag} />
        </form>
    );
}