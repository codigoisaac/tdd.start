import { useState, useEffect } from "react";
import { api } from "../services/api";

export const useBookList = (initial) => {
  const [books, setBooks] = useState(initial);
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

  return { books, isLoading, hasError };
};
