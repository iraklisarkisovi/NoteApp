import { useLoaderData, type LoaderFunctionArgs } from "react-router";
import { GetNote } from "../Api Requests/requests";
import type { INotes } from "../components/UserNoteList";
import "../app.css";

export async function NoteReq({ params }: LoaderFunctionArgs) {
  const id = params.id;
  if (!id) {
    throw new Response("Note ID is missing", { status: 400 });
  }
  const res = await GetNote(id);
  console.log(res.post)
  return res.post as INotes;
}

export default function Note() {
  const data = useLoaderData() as INotes;

  return (
    <div className="parentdiv">
        <div className="content">
            <h1>{data?.author}</h1>
            <p>{data?.body}</p>
            <p>Rating: {data?.rating}</p>
        </div>
    </div>
  );
}