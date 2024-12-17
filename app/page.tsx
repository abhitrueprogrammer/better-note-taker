"use client";
import Image from "next/image";
// import Note from "./components/Note";
// interface NoteState {
  //   notes: string[];
  //   updateNote: (note: string, index: number) => void;
  //   addNotes: (note: string) => void;
// }
// export const useNotes = create<NoteState>((set) => ({
  //   notes: [],
  //   updateNote: (note: string, target_index: number) =>
  //     set((state) => ({
  //       notes: state.notes.map((old_note, index) => {
//         console.log("Hi");

//         if (index != target_index) {
  //           return old_note;
  //         } else {
    //           return note;
    //         }
    //       }),
    //     })),
    
    //   addNotes: (note: string) =>
    //     set((state) => ({
    //       notes: [...state.notes, note],
//     })),
// }));
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
