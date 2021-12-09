import { Link, useParams} from 'react-router-dom';
// import useFetch from './../hooks/useFetch';
import {useQuery, gql } from "@apollo/client";


const REVIEW = gql`
# Write your query or mutation here
query GetReviews {
  reviews {
    data {
      id
      attributes {
        title
        rating
        body
      }
    }
  }
}`;



function ReviewDetails() {

    const { id } = useParams();
    // const url = `http://localhost:1337/api/reviews/${id}`;
    // const { loading, error, data } = useFetch(url);
    const { loading, error, data } = useQuery(REVIEW);
    // console.log("REVIEW =", useQuery(REVIEW))


    if(loading) return <p>Loading ...</p>;
    if(error) return <p>{error} ...</p>;
    return (
        <>
            <div className="review-card">
                <div className="rating">{data.reviews.data[id-1].attributes.rating}</div>
                <h2>{data.reviews.data[id-1].attributes.title}</h2>
                <small>console list</small>
                <p>{data.reviews.data[id-1].attributes.body}</p>
                <Link to="/">Back To Home</Link>
            </div>
        </>
    );
}

export default ReviewDetails;
