
function Form() {
  return (<>
<form className="form-container">
<div className="form-inputs">
<div>

    <label>Book Name:</label>
    <input type="text" id="bookName" name="bookName" required />
</div>
<div>

    <label>List To Add:</label>
    <select id="listSelection" name="listSelection" required>
      <option value="to-buy">To-Buy</option>
      <option value="to-read">To-Read</option>
      <option value="already-read">Already Read</option>
    </select>
</div>
</div>

    <button type="submit" className="form-btn">Add Book</button>
</form>
  </>
  )
}

export default Form