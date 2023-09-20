import { Typography } from "@mui/material";
import { BookListContainer } from "./components/BookListContainer";

function App() {
  return (
    <div className="App">
      <Typography variant="h1" component="h1">
        Papyric
      </Typography>

      <BookListContainer />
    </div>
  );
}

export default App;
