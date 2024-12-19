"use client";
import Image from "next/image";

import { create } from "zustand";
import Note from "./components/Note";
interface NoteState {
  notes: string;
  updateNote: (note: string) => void;
}
export const useNotes = create<NoteState>((set) => ({
  notes: "",
  updateNote: (note: string) =>
    set((state) => ({
      notes: note
    }))
}));


export default function Home() {
  const notes = useNotes();

  return (
    <div className="p-3 h-screen">
      <h1 className="text-2xl flex justify-center ">Minimalistic note taker</h1>
      <div className="flex   flex-col">
        <Note />
        <div className=" bg-red-900 p-2 text-wrap w-full h-full text-white overflow-auto">
          {notes.notes.length > 0 ? notes.notes : "No note available"}
        </div>
      </div>
    </div>
  );
}
