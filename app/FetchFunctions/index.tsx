const PostNote = ({ id, note }: { id: number; note: string }) => {
  fetch("/api/note", {
    method: "POST",
    body: JSON.stringify({ id: id, note: note }),
  });
};
