import { BookList } from "./BookList";
import { useState, useEffect } from "react";
import { api } from "../services/api";

export const BookListContainer = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      setIsLoading(true);
      setHasError(false);

      try {
        const response = await api.get("books");
        setBooks(response.data);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchBooks();
  }, []);

  return <BookList books={books} />;
};
