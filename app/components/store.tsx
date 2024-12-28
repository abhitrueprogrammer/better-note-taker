import { create } from "zustand";

interface NoteState {
    notes: string;
    updateNote: (note: string) => void;
  }
  export const useNotes = create<NoteState>((set) => ({
    notes: "",
    updateNote: (note: string) =>
      set((state) => ({
        notes: note
      }
    ))
  }));