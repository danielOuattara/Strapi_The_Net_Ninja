import { Link, useParams} from 'react-router-dom';
// import useFetch from './../hooks/useFetch';
import {useQuery, gql } from "@apollo/client";


const REVIEW = gql`
query GetReview ($id: ID!) {
  review(id: $id) {
    	data {
    	  id
    	  attributes {
    	    title
    	    rating
    	    body
          categories {
            data {
              id
              attributes {
                name
              }
            }
          }
    	  }
    	}
  }
}`;


function ReviewDetails() {
    const { id } = useParams();
    const { loading, error, data } = useQuery(REVIEW, {variables: {id: id}});
    console.log("=======",data)

    if(loading) return <p>Loading ...</p>;
    if(error) return <p>{error} ...</p>;
    return (
        <>
            <div className="review-card">
                <div className="rating">{data.review.data.attributes.rating}</div>
                <h2>{data.review.data.attributes.title}</h2>
                {data.review.data.attributes.categories.data.map(category => {
                      return <small key={category.id}>{category.attributes.name}</small>
                  })}
                <p>{data.review.data.attributes.body}</p>
                <Link to="/">Back To Home</Link>
            </div>
        </>
    );
}

export default ReviewDetails;
