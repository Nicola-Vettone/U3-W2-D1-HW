import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Alert, Image, Spinner } from "react-bootstrap";

const CommentArea = ({ asin, imgSrc, title }) => {
  const [reviews, setReviews] = useState([]);
  const [fetched, setFetched] = useState(false);

  const fetchComments = async () => {
    const resp = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2E0ZGUxYmNhMDcwNDAwMTU4YmY5NzkiLCJpYXQiOjE3Mzg4NTgwMTEsImV4cCI6MTc0MDA2NzYxMX0.KY1i3aAaFytdpVHLectYt_unBT7ZsLQJtlf6z-iXCXg",
      },
    });

    if (resp.ok) {
      const reviews = await resp.json();
      console.log(reviews);

      setReviews(reviews);
      setFetched(true);
    }
  };

  useEffect(() => {
    if (asin) {
      fetchComments();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asin]);

  return (
    <div className="commentArea ">
      <Image fluid className="d-block w-75 mx-auto mb-4 img-fluid" src={imgSrc} />
      <h6>Recensioni per {title}</h6>
      {fetched ? (
        reviews.length > 0 ? (
          <CommentList reviews={reviews} fetchComments={fetchComments} />
        ) : (
          <Alert variant="info">Non ci sono ancora recensioni</Alert>
        )
      ) : (
        <Spinner animation="border" variant="info" />
      )}

      <AddComment asin={asin} fetchComments={fetchComments} />
    </div>
  );
};

export default CommentArea;
