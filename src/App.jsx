import { useState } from "react";
import "./App.css";
import BookList from "./components/BookList";
import Footer from "./components/Footer";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";

import fantasy from "./data/books/fantasy.json";
import history from "./data/books/history.json";
import horror from "./data/books/horror.json";
import romance from "./data/books/romance.json";
import scifi from "./data/books/scifi.json";
import { Button } from "react-bootstrap";

const App = () => {
  /*  state = {
    books: fantasy
  }; */
  const [books, setbooks] = useState(fantasy);

  console.log("render App");
  return (
    <>
      <MyNav />
      <Welcome />
      <div className="d-flex justify-content-center gap-1">
        <Button variant="primary" onClick={() => setbooks(fantasy)}>
          Fantasy
        </Button>
        <Button variant="warning" onClick={() => setbooks(history)}>
          History
        </Button>
        <Button variant="danger" onClick={() => setbooks(horror)}>
          Horror
        </Button>
        <Button variant="success" onClick={() => setbooks(romance)}>
          Romance
        </Button>
        <Button variant="info" onClick={() => setbooks(scifi)}>
          Scifi
        </Button>
      </div>
      <BookList books={books} />
      <Footer />
    </>
  );
};

export default App;
