import { Typography } from "@mui/material";

export const BookList = ({ books }) => {
  return (
    <div data-test="book-list">
      {books.map((book) => (
        <div className="book-item">
          <Typography variant="h4" component="h2" className="book-title">
            {book.name}
          </Typography>
        </div>
      ))}
    </div>
  );
};
