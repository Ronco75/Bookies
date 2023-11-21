import BookButtons from "./BookButtons";

function Book({ text }) {
  return (
    <div className="book">
      <p>{text}</p>
      <BookButtons />
    </div>
  );
}

export default Book;
