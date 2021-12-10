import { Link, useParams} from 'react-router-dom';
import {useQuery, gql } from "@apollo/client";


const CATEGORY = gql`
query GetCategory($id: ID!) {
  category(id: $id) {
    data {
      id
      attributes {
        name
        reviews {
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
      }
    }
  }
}
`;


function Category() {

        const { id } = useParams();
        const { loading, error, data } = useQuery(CATEGORY, {variables: {id: id}} );

    if(loading) return <p>Loading ...</p>;
    if(error) return <p>{error} ...</p>;
    console.log("DATA === ", data)

    return (
        <>
            <h2>{data.category.data.attributes.name} Category :</h2>
            {data.category.data.attributes.reviews.data.map((review) => {
                return(
                    <div key={review.id} className="review-card">
                        <div className="rating">{review.attributes.rating}</div>
                        <h2>{review.attributes.title}</h2>
                        {review.attributes.categories.data.map(category => {
                            return <small key={category.id} >{category.attributes.name}</small>
                        })}
                        <p>{review.attributes.body.substring(0, 300) + ` ...`} <Link to={`/details/${review.id}`} >Read More</Link></p>
                    </div>
            )})}
        </>
    );
}

export default Category
