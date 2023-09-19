import { Typography } from "@mui/material";
import { BookList } from "./components/BookList";
import { useState, useEffect } from "react";
import { api } from "./services/api";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      const response = await api.get("books");
      setBooks(response.data);
    };
    loadBooks();
  }, []);

  return (
    <div className="App">
      <Typography variant="h1" component="h1">
        Papyric
      </Typography>

      <BookList books={books} />
    </div>
  );
}

export default App;
