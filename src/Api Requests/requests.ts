import type { INotes } from "../components/UserNoteList"

interface IRes {
    posts: [{body: string, id: string, rating: string, author:string}]
}

export const GetPosts = async () => {
    try{
        const res  = await fetch("http://localhost:8080/posts")
        return res.json()
    }catch(err){
        console.error(err)
        throw err
    }
}

export const PostNotes = async (body: INotes) => {
    try{
        const res = await fetch("http://localhost:8080/posts", {
            method: "POST",
            headers:{ "Content-Type":  "application/json"},
            body: JSON.stringify(body)
        })
        console.log(JSON.stringify(body));
        return res.json()
    }catch(err){
        console.error(err)
        throw err
    }
}