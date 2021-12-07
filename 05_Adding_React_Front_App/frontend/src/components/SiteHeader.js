import { Link } from 'react-router-dom';


function SiteHeader() {
    return (
        <div className="site-header">
            <Link to="/"> <h1>Ninja Review</h1></Link>           
        </div>
    );
}

export default SiteHeader;
