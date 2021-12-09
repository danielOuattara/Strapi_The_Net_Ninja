import { Link, useParams} from 'react-router-dom';
import useFetch from './../hooks/useFetch';

function ReviewDetails() {

    const { id } = useParams();
    const url = `http://localhost:1337/api/reviews/${id}`;
    const { loading, error, data } = useFetch(url);
    console.log(data)

    if(loading) return <p>Loading ...</p>;
    if(error) return <p>{error} ...</p>;
   
    return (
        <>
            <div key={id} className="review-card">
                <div className="rating">{data.attributes.rating}</div>
                <h2>{data.attributes.title}</h2>
                <small>console list</small>
                <p>{data.attributes.body}</p>
                <Link to="/">Back To Home</Link>
            </div>
        </>
    );
}

export default ReviewDetails;
