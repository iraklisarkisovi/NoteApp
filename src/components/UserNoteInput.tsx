import { useState } from "react";
import type { INotes } from "./UserNoteList";
import UserNoteList from "./UserNoteList";
import "./componentStyles/Input.css"

export const UserNoteInput = () => {
    const [notes, setNotes] = useState<INotes[]>([]);
    const [note, setNote] = useState<INotes>({
        author: "",
        note: "",
        rating: 0
    });

    const onChange = (input: string, type: "author" | "note") => {
        setNote((prev) => ({ ...prev, [type]: input }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); 
        
        setNotes((prev) => [...prev, note]);

        setNote({ author: "", note: "", rating: 0 });
    };

    return (
        <div className="page">
            <form onSubmit={handleSubmit} className="parentFlex">
                <input
                type="text"
                placeholder="Author"
                value={note.author}
                onChange={(e) => onChange(e.target.value, "author")}
                />

                <textarea
                placeholder="Note"
                value={note.note}
                onChange={(e) => onChange(e.target.value, "note")}
                />

                <p className="preview">{note.author}</p>

                <button type="submit">Post</button>
            </form>

            <UserNoteList notes={notes} />
        </div>

    );
};