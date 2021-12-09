// import useFetch from "./../hooks/useFetch";
import {Link } from 'react-router-dom';
import {useQuery, gql } from "@apollo/client";


const REVIEWS = gql`
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

export default function Home() {
    // const url = "http://localhost:1337/api/reviews/";
    // const { loading, error, data } = useFetch(url);
    // console.log(" REVIEWS ===", useQuery(REVIEWS))
    const { loading, error, data } = useQuery(REVIEWS);

    if(loading) return <p>Loading ...</p>;
    if(error) return <p>{error}..</p>;
   
    return (
        <>
            {data.reviews.data.map((review) => (
                <div key={review.id} className="review-card">
                    <div className="rating">{review.attributes.rating}</div>
                    <h2>{review.attributes.title}</h2>
                    <small>console list</small>
                    <p>{review.attributes.body.substring(0, 300) + ` ...`} <Link to={`/details/${review.id}`} >Read More</Link></p>
                </div>
            ))}
        </>
    );
}
