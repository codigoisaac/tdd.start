import { Typography } from "@mui/material";

function App() {
  const books = [{ name: "Refactoring" }, { name: "Domain-Driven Design" }];

  const renderBooks = () => (
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

  return (
    <div className="App">
      <Typography variant="h1" component="h1">
        Papyrica
      </Typography>

      {renderBooks()}
    </div>
  );
}

export default App;
