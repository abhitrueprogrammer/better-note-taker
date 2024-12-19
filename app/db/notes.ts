import mongoose, { Schema, type Model } from "mongoose";

interface INote {
  note: string;
}
const noteSchema = new Schema<INote>({
  note: { type: String, require: true },
});

const Note: Model<INote> =
  mongoose.models.Note ?? mongoose.model<INote>("Note", noteSchema);

export default Note;
