import { Typography } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Typography variant="h1" component="h1">
        Papyrica
      </Typography>

      <div data-test="book-list">
        <div className="book-item">
          <h2 className="book-title">Refactoring</h2>
        </div>

        <div className="book-item">
          <h2 className="book-title">Domain-Driven Design</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
