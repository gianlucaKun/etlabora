import { Link } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/create">create</Link>
            </li>
            <li>
                <Link to="/about">about</Link>
            </li>
            <li>
                <Link to="/contact">contact</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar