import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer d-flex justify-center">
            <Link to="/" className="footer-btn link footer-link">Home</Link>
            <Link to="/scan" className="footer-btn link footer-link">Scan</Link>
            <Link to="/myiq" className="footer-btn link footer-link">My IQ</Link>
        </footer>
    );
};

export default Footer;