"use client" ;
import React from "react";
import debounce from "debounce";
import { useNotes } from "./store";


export default function Note() {
  const notes = useNotes();
  const debouncedUpdate = debounce(() => console.log("Hello world"), 1000);

  return (
    <div className="h-full ">
      <textarea
        onChange={(e) => {
          debouncedUpdate();
          notes.updateNote(e.target.value);
        }}
        // value={notes.notes[0] || ""} // Ensure value is tied to the first note

        className="min-h-96 w-full bg-black text-white border-white border"
      ></textarea>
    </div>
  );
}

export function NoteText() {
  const notes = useNotes();
  return (
    <div className=" bg-red-900 p-2 text-wrap w-full h-full text-white overflow-auto">
      {notes.notes.length > 0 ? notes.notes : "No note available"}
    </div>
  );
}
