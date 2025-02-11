import { useState } from "react";
import { Badge, Card, Col } from "react-bootstrap";
// import CommentArea from "./CommentArea";

const SingleBook = ({ book, changeBookSelected }) => {
  // state = {
  //   selected: false
  // };

  const [selected, setSelected] = useState(false);

  const checkSelected = () => (selected ? "border-danger" : "");

  console.log(this.props);
  return (
    <Col>
      <Card className={checkSelected()}>
        <Card.Img
          variant="top"
          src={book.img}
          onClick={() => {
            changeBookSelected(book);
            setSelected(!selected);
          }}
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.category}</Card.Text>
          <Card.Text>
            <Badge bg="info">€{book.price}</Badge>
          </Card.Text>

          {/* {this.state.selected && <CommentArea asin={this.props.book.asin} />} */}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SingleBook;
