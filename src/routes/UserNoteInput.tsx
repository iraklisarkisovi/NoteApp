import { useState } from "react";
import { Modal } from "../components/Modal"
import type { INotes } from "../components/UserNoteList"
import "../components/componentStyles/Input.css"
import { PostNotes } from "../Api Requests/requests";
import { useNavigate } from "react-router";

// interface IProps {
//     submit: (e: React.FormEvent) => void
//     change: (e: string, name: "author" | "note") => void
//     note: INotes
//     CloseModal: () => void
//     modal: boolean
// }


export const UserNoteInput = () => {
    const navigate = useNavigate()
    const [note, setNote] = useState<INotes>({
        author: "",
        body: "",
        rating: 0
    });

    const onChange = (input: string, type: "author" | "body") => {
        setNote((prev) => ({ ...prev, [type]: input }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); 
        const res = await PostNotes(note)
        setNote({ author: "", body: "", rating: 0 });
        navigate("..")
        return res.json()
    };

    return(
        <Modal>
            <h2 className="modalTitle">Input your Note</h2>

            <form onSubmit={handleSubmit} className="parentFlex modalForm">
                <input
                    type="text"
                    placeholder="Author"
                    value={note.author}
                    onChange={(e) => onChange(e.target.value, "author")}
                />

                <textarea
                    placeholder="Note"
                    value={note.body}
                    onChange={(e) => onChange(e.target.value, "body")}
                />

                <p className="preview">{note.author}</p>

                <button type="submit">Post</button>
            </form>
        </Modal>
    );
}