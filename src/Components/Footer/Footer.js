import "../../Stayls/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <h2>Ready to make something kickass?<br /><span>Let's get on a call.</span></h2>
            <div className="footer-ul">
                <div className="footer-text">
                    <h2>Portfolio Creator<em style={{
                        background: "linear-gradient(89.94deg, #B16CEA -21.68%, #FF5E69 47.38%, #FF8A56 99.43%, #FFA84B 132.45%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontStyle: "normal"  // kerak bo'lsa em italic emas bo'lsin
                    }}>.</em></h2>
                    <p>4353 Delaware Avenue, San Francisco, USA</p>
                    <span><i class="fas fa-envelope"></i> hi@thefolio.com</span>
                </div>

                <div className="footer-about">
                    <p>About</p>
                    <p>Services</p>
                    <p>Experience</p>
                    <p>Contact</p>
                    <p>Blog</p>
                    <p>Projects</p>
                    <p>Dribbble</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                </div>
            </div>
            <div className="footer-link">
                <p>© All rights reserved.</p>
                <p>Sumit Hegde</p>
                <p>. Powered by</p>
                <p>Webflow </p>
                <p>/ Image License Info </p>
                <p>/ Instructions </p>
                <p>/ Changelog</p>
                <p>/ Style Guide</p>
            </div>
        </div>
    );
}

export default Footer;