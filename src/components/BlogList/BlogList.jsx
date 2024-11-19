import React, { useState } from "react";

export default function BlogList({ articles, onDelete, onUpdate }) {
    const [editingId, setEditingId] = useState(null);
    const [editTitle, setEditTitle] = useState("");

    const handleEdit = (article) => {
        // imposto l'articolo in modifica
        setEditingId(article.id);
        // Precompila il titolo
        setEditTitle(article.title);
    };

    const handleUpdate = (id) => {
        // salva la modifica
        onUpdate(id, { title: editTitle });
        // esce dalla modialità modifica
        setEditingId(null);
    };

    return (
        <div className="list">
            {articles.map((article) => (
                <div key={article.id} className="blog-item">
                    {editingId === article.id ? (
                        <>
                            <input
                                type="text"
                                value={editTitle}
                                onChange={(e) => setEditTitle(e.target.value)}
                            />
                            <button onClick={() => handleUpdate(article.id)}>Save</button>
                            <button onClick={() => setEditingId(null)}>Cancel</button>
                        </>
                    ) : (
                        <>
                            <h3>{article.title}</h3>
                            <p>Author: {article.author}</p>
                            <p>Status: {article.status}</p>
                            <div className="buttons">
                                <button onClick={() => handleEdit(article)}>Edit</button>
                                {/* cancella la modifica */}
                                <button onClick={() => onDelete(article.id)}>Delete</button>
                            </div>
                        </>
                    )}
                </div>
            ))}
        </div>
    );
};
