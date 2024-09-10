import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <header className="header d-flex">
                <div className="camera-icon">📷</div>
                <input type="text" placeholder="SEARCH" className="search-bar" />
                <button className="search-button">🔍</button>
            </header>
            <div className="buttons-row d-flex justify-center">
                <Link to="/" className="link header-link">Scan</Link>
                <Link to="/scan" className="link header-link">Learn</Link>
                <Link to="/myiq" className="link header-link">My Bin IQ</Link>
            </div>
        </>
    );
};
export default Header;