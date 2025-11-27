import "../../Stayls/Header.css";

function Header() {
    return (
        <div className="header">
            <div className="header-logo">
                <h1>Portfolio Creator</h1>
            </div>
            <div className="header-ul">
                <li><a>About</a></li>
                <li><a>Services</a></li>
                <li><a>Projects</a></li>
                <li><a>Blog</a></li>
                <li><a>Book a call <i className="fas fa-arrow-right"></i></a></li>
            </div>
        </div>
    )
}
export default Header;