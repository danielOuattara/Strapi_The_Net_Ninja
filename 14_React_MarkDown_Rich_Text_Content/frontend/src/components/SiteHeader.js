import { Link } from 'react-router-dom';
import {useQuery, gql } from "@apollo/client";

const CATEGORIES = gql`
    query GetCategories {
        categories {
            data {
                id
                attributes {
                    name
                }
            }
        }
    }
`;

function SiteHeader() {

    const { loading, error, data } = useQuery(CATEGORIES);
    if(error) return <p>{error} ...</p>;

    return (
        <div className="site-header">
            <Link to="/"> <h1>Ninja Review</h1></Link>
           {!loading && !error && <nav className="categories">
                <span>Filter reviews by category : </span>
                {data.categories.data.map( (category) =>{
                    return <Link key={category.id}  to={`/category/${category.id}`}> 
                        {category.attributes.name} &nbsp;| &nbsp; 
                    </Link>;
                } )}
            </nav> }
                     
        </div>
    );
}

export default SiteHeader;
