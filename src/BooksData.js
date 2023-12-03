import { v4 as uuidv4 } from 'uuid';

const booksData = [
  { id: uuidv4(), bookName: "Book 0", status: "To-Buy" },
  { id: uuidv4(), bookName: "Book 1", status: "To-Read" },
  { id: uuidv4(), bookName: "Book 2", status: "To-Buy" },
  { id: uuidv4(), bookName: "Book 3", status: "To-Buy" },
  { id: uuidv4(), bookName: "Book 4", status: "To-Read" },
  { id: uuidv4(), bookName: "Book 5", status: "Already-Read" },
  { id: uuidv4(), bookName: "Book 6", status: "Already-Read" },
  { id: uuidv4(), bookName: "Book 7", status: "Already-Read" },
];

export default booksData;
