import { Link } from "react-router-dom";

import "./Footer.css";
import LinkedIn from "../../assets/LinkedIn.svg";
import GitHub from "../../assets/github.svg";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__copyright">
        &copy; 2025 Supersite, Powered by News API
      </p>
      <div className="footer__container">
        <div className="footer__links">
          <Link className="footer__home" to="/">
            Home
          </Link>
          <a
            href="https://tripleten.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__tripleten"
          >
            TripleTen
          </a>
        </div>
        <div className="footer__social">
          <a
            href="https://github.com/Amches"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHub} alt="github" className="footer__social-github" />
          </a>
          <a
            href="https://www.LinkedIn.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={LinkedIn}
              alt="LinkedIn"
              className="footer__social-linkedin"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
