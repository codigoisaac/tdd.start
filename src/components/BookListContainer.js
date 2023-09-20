import { useBookList } from "../hooks/useBookList";
import { BookList } from "./BookList";

export const BookListContainer = () => {
  const { books, isLoading, hasError } = useBookList();

  return <BookList books={books} isLoading={isLoading} hasError={hasError} />;
};
