import { Link } from "react-router-dom"

function Header(){
    return(
        <nav className="grey darken-4">
            <div className="nav-wrapper">
                <Link to="/" className="brand-logo center">Rick and Morty</Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to ="/about">About</Link></li>
                        <li><Link to ="/contacts">Contacts</Link></li>
                    </ul>
                </div>
            </nav>
    )
}
export default Header