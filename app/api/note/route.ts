import connectToDatabase from "@/app/lib/mongoose";
import Note from "@/app/db/notes";
import { NextResponse } from "next/server";
export async function GET() {
  const allNotes = Note.find();
  return allNotes;
}
export async function POST(params: Request) {
  await connectToDatabase();

  const text = params.body;
  const newNote = new Note(text);
  newNote.save();
  return NextResponse.json({ body: text }, { status: 404 });
}
export async function UPDATE(params: Request) {
  await connectToDatabase();

  const text = params.body;
  const newNote = new Note(text);
  newNote.save();
  return NextResponse.json({ body: text }, { status: 404 });
}
