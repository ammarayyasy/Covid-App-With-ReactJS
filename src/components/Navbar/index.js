import {Link} from "react-router-dom";
import NavbarStyled from "./Navbar.styled";
import { useState } from "react";

function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };
    return (
        <NavbarStyled>
            <nav>
                <div>
                    <Link to="/"><h1>Covid ID</h1></Link>
                </div>
                
                <div>
                    <h2 onClick={handleMenuToggle}>≡</h2>
                    <ul className={isMenuOpen ? 'show' : ''}>
                        <li>
                          <Link to="/">Global</Link>
                        </li>
                        <li>
                          <Link to="/covid/indonesia">Indonesia</Link>
                        </li>
                        <li>
                          <Link to="/covid/provinsi">Provinsi</Link>
                        </li>
                        <li>
                          <Link to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </NavbarStyled>
    );
}

export default Navbar;