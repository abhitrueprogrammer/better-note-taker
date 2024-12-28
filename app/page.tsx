
import { create } from "zustand";
import Note, { NoteText } from "./components/Note";



export default function Home() {

  return (
    <div className="p-3 h-screen">
      <h1 className="text-2xl flex justify-center ">Minimalistic note taker</h1>
      <div className="flex   flex-col">
        <Note />
        <NoteText />
      </div>
    </div>
  );
}
