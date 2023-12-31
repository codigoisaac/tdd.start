import { Typography } from "@mui/material";

export const BookList = ({ books, isLoading, hasError }) => {
  return (
    <div data-test="book-list">
      {books &&
        !isLoading &&
        !hasError &&
        books.map((book, index) => (
          <div className="book-item" key={index}>
            <Typography variant="h4" component="h2" className="book-title">
              {book.name}
            </Typography>
          </div>
        ))}
    </div>
  );
};
