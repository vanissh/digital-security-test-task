import { NavLink } from 'react-router-dom'
import './NavBar.scss'

const NavBar = () => {

    return (
        <nav className="navbar">
            <div className="navbar-brand">Test Task &#128184;</div>
            <ul className="navbar-list">
                <li className="nav-item">
                    <NavLink to="/" className="nav-link">О приложении</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/converter" className="nav-link">Конвертер</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar