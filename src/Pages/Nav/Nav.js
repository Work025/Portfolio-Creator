import "../../Stayls/Nav.css"

function Nav() {


    const navcard = [
        { "title": "What type of projects do you take on?" },
        { "title": "What type of projects do you take on?" },
        { "title": "What type of projects do you take on?" },
        { "title": "What type of projects do you take on?" },
        { "title": "What type of projects do you take on?" },
        { "title": "What type of projects do you take on?" },
        { "title": "What type of projects do you take on?" },
        { "title": "What type of projects do you take on?" }
    ]

    return (
        <div className="nav">
            <div className="nav-name">
                <span>FAQ</span>
                <h2>Frequently asked questions</h2>
            </div>
            <div className="nav-blog">
                {navcard.map((navcard, idx) => (
                    <div className="nav-card">
                        <p>{navcard.title}</p><i className="fas fa-chevron-down"></i>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Nav;