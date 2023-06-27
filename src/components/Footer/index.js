import { Link } from "react-router-dom";
import FooterStyled from "./Footer.styled";

function Footer() {
  return (
    <FooterStyled>
      <footer>
        <div className="footer__brand">
          <h1>Covid ID</h1>
          <p>Developed by ammarayyasy</p>
        </div>
        <div>
          <ul>
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
      </footer>
    </FooterStyled>
  );
}

export default Footer;
