import { useEffect, useState } from "react";
import "./componentStyles/List.css"
import { DeletePost, GetPosts } from "../Api Requests/requests";

export interface INotes {
    author: string,
    body: string,
    rating: number
    id?: string
}   

const UserNoteList = () => {
    const [notes, setNotes] = useState<INotes[]>([]);

    useEffect(() => {
        const GetData = async () => {
            const res = await GetPosts()
            setNotes(res.posts)
        }
        GetData()
    }, [])
    
    return (
        <>
            <div className="noteList">
                <h2 className="listTitle">User Note List</h2>

                {notes.map(({ author, body, rating, id }: INotes, index: number) => (
                    <div key={index} className="NoteDiv">
                        <div className="InfoDiv">
                            <div className="InnerDiv">
                                <h3 className="noteAuthor">{author.toUpperCase()}</h3>
                                <p className="noteText">{body}</p>
                                <span className="noteRating">⭐ {rating}</span>   
                            </div>
                            <button className="ButtonS" onClick={() => DeletePost(String(id))}>Delete Note</button>
                        </div>
                    </div>
                ))}

            </div>
        </> 
    );
};

export default UserNoteList;