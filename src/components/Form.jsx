import { useState } from "react";

function Form({ addBook }) {
  const [text, SetText] = useState();
  const [selected, setSelected] = useState("To-Buy");

  const handleTextChange = (e) => {
    SetText(e.target.value);
  };

  const handleListChange = (e) => {
    setSelected(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ bookName: text, state: selected });
    SetText("");
    setSelected("To-Buy");
  };

  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-inputs">
          <div>
            <label>Book Name:</label>
            <input
              onChange={handleTextChange}
              type="text"
              id="bookName"
              name="bookName"
              value={text || ""}
              required
            />
          </div>
          <div>
            <label>List:</label>
            <select
              id="listSelection"
              name="listSelection"
              value={selected}
              onChange={handleListChange}
              required
            >
              <option value="To-Buy">To-Buy</option>
              <option value="To-Read">To-Read</option>
              <option value="Already-Read">Already-Read</option>
            </select>
          </div>
        </div>

        <button type="submit" className="form-btn">
          Add Book
        </button>
      </form>
    </>
  );
}

export default Form;
