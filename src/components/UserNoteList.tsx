import { Modal } from "./Modal"
import "./componentStyles/List.css"

export interface INotes {
    author: string,
    note: string,
    rating: number
}   

const UserNoteList = ({ notes }: { notes: INotes[] }) => {
    
    return (
        <>
            <div className="noteList">
            <h2 className="listTitle">User Note List</h2>

            {notes.map(({ author, note, rating }: INotes, index) => (
                <div key={index} className="NoteDiv">
                <h3 className="noteAuthor">{author.toUpperCase()}</h3>
                <p className="noteText">{note}</p>
                <span className="noteRating">⭐ {rating}</span>
                </div>
            ))}
            </div>
        </> 
  );
};

export default UserNoteList;