import { useEffect } from "react";
import { Modal } from "./Modal";
import type { INotes } from "./UserNoteList";
import "./componentStyles/Input.css"

interface IProps {
    submit: (e: React.FormEvent) => void
    change: (e: string, name: "author" | "note") => void
    note: INotes
    CloseModal: () => void
    modal: boolean
}


export const UserNoteInput = ({change, submit, note, CloseModal, modal}: IProps) => {
    if(!modal) return null
    return(
        <Modal CloseModal={CloseModal}>
            <h2 className="modalTitle">Input your Note</h2>

            <form onSubmit={submit} className="parentFlex modalForm">
            <input
                type="text"
                placeholder="Author"
                value={note.author}
                onChange={(e) => change(e.target.value, "author")}
            />

            <textarea
                placeholder="Note"
                value={note.note}
                onChange={(e) => change(e.target.value, "note")}
            />

            <p className="preview">{note.author}</p>

            <button type="submit">Post</button>
            </form>
        </Modal>

    );
}