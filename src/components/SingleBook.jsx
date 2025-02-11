import { useState } from "react";
import { Badge, Card, Col } from "react-bootstrap";
// import CommentArea from "./CommentArea";

const SingleBook = ({ book, changeBookSelected, checkSelected, selectedBookAsin }) => {
  // state = {
  //   selected: false
  // };

  /* const [selected, setSelected] = */ useState(false);

  checkSelected = () => (selectedBookAsin === book.asin ? "border-danger" : "");

  return (
    <Col>
      <Card className={checkSelected()}>
        <Card.Img
          variant="top"
          src={book.img}
          onClick={() => {
            changeBookSelected(book);
            /*  setSelected(!selected); */
          }}
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.category}</Card.Text>
          <Card.Text>
            <Badge bg="info">€{book.price}</Badge>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
