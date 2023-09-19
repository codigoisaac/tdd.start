import { Typography } from "@mui/material";
import { BookList } from "./components/BookList";

function App() {
  const books = [{ name: "Refactoring" }, { name: "Domain-Driven Design" }];

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
