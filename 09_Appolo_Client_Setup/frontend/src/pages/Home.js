import useFetch from "./../hooks/useFetch";
import {Link } from 'react-router-dom';

export default function Home() {
    const url = "http://localhost:1337/api/reviews/";
    const { loading, error, data } = useFetch(url);

    if(loading) return <p>Loading ...</p>;
    if(error) return <p>{error}..</p>;
   
    return (
        <>
            {data.map((review) => (
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
