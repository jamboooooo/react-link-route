import {NavLink} from 'react-router-dom'

function Header() {
    return <header>
        <h2>Cover</h2>
        <ul>
            <li>
                <NavLink
                    exact
                    to="/"
                    className="link"
                    activeClassName="active"
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/Features"
                    className="link"
                    activeClassName="active"
                >
                    Features
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/Contact"
                    className="link"
                    activeClassName="active"
                >
                    Contact
                </NavLink>
            </li>
          
        </ul>
    </header>
}

export default Header