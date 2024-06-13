import { Link } from 'react-router-dom';
import { getFitbitAuthUrl } from './utils/fitbit';

const NavBar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/foodList">Food List</Link></li>
                <li>
                <a href={getFitbitAuthUrl()}>Connect to Fitbit</a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;