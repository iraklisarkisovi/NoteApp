import { Modal } from "../components/Modal"
import type { INotes } from "../components/UserNoteList"
import "../components/componentStyles/Input.css"
import { PostNotes } from "../Api Requests/requests";
import { Form, redirect, type ActionFunctionArgs } from "react-router";

// interface IProps {
//     submit: (e: React.FormEvent) => void
//     change: (e: string, name: "author" | "note") => void
//     note: INotes
//     CloseModal: () => void
//     modal: boolean
// }


export const UserNoteInput = () => {
    return(
        <Modal>

            <Form method="post" className="parentFlex modalForm">
                <h2 className="modalTitle">Input your Note</h2>

                <input
                    type="text"
                    placeholder="Author"
                    name="author"
                />

                <textarea
                    placeholder="Note"
                    name="body"
                />
                <button type="submit">Post</button>
            </Form>
        </Modal>
    );
}

export const handleSubmit = async ({request}: ActionFunctionArgs) => {
    const postData = await request.formData()
    const noteData: INotes = {
        author: String(postData.get("author") ?? ""),
        body: String(postData.get("body") ?? ""),
        rating: Number(postData.get("rating") ?? 0),
    };
    console.log(noteData);
    await PostNotes(noteData)
    return redirect("/")
};