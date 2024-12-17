import React from "react";
import { useNotes } from "../page";

export default function Note() {
  const notes = useNotes();

  return (
    <div className="h-full ">
      <textarea
        onChange={(e) => {
          notes.updateNote(e.target.value);
          
        }}
        // value={notes.notes[0] || ""} // Ensure value is tied to the first note

        className="min-h-96 w-full bg-black text-white border-white border"
      ></textarea>
    </div>
  );
}
