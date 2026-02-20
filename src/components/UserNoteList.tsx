import { useContext, useEffect, useState } from "react";
import "./componentStyles/List.css"
import { DeletePost, GetPosts } from "../Api Requests/requests";
import { ContextStore } from "../store/ContextStore";
import { useLoaderData, type LoaderFunction } from "react-router";

export interface INotes {
    author: string,
    body: string,
    rating: number
    id?: string
}   

export const GetData: LoaderFunction = async () => {
    const res = await GetPosts()
    const data = res
    return data.posts as INotes[]
}

const UserNoteList = () => {
    const notes = useLoaderData() as INotes[]
    // const context = useContext(ContextStore)
    
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


