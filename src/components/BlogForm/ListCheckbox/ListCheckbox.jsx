import React, { useState } from "react";

export default function ListCheckbox({ availableTags, tag, setTag }) {
    // Gestisce il cambiamento dello stato dei tag selezionati
    const handleChange = (e) => {
        const tagValue = e.target.value;
        setTag((prevTags) =>
            prevTags.includes(tagValue)
                ? prevTags.filter((t) => t !== tagValue) // Rimuovi il tag se già selezionato
                : [...prevTags, tagValue] // Aggiungi il tag se non è già selezionato
        );
    };

    return (

        <ul>
            {availableTags.map(avaibleTag => {
                return (
                    <li>
                        <label key={avaibleTag}>
                            <input
                                type="checkbox"
                                value={avaibleTag}
                                // Controlla se il tag è già selezionato
                                checked={tag.includes(avaibleTag)} 
                                onChange={handleChange}
                            />
                            {avaibleTag}
                        </label>
                    </li>
                )
            })}
        </ul>
    )
}