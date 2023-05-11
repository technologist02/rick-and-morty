import { NavLink } from "react-router-dom"

function Header(){
    return(
        <nav className="grey darken-4">
            <div className="nav-wrapper">
                <ul id="nav-mobile">
                    <li><NavLink to="/">Rick and Morty</NavLink></li>
                    <li><NavLink to="/characters">Characters</NavLink></li>
                    <li><NavLink to ="/about">About</NavLink></li>
                    <li><NavLink to ="/contacts">Contacts</NavLink></li>
                </ul>
            </div>
            </nav>
    )
}
export default Header