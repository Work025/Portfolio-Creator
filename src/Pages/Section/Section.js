import "../../Stayls/Section.css";
import UserAvatar from "../../Assets/UserAvatar.svg";
import logoipsum1 from "../../Assets/Logorem.svg";
import logoipsum2 from "../../Assets/Logoipsum.svg";
import logoipsum3 from "../../Assets/Logoipsum2.svg";
import logoipsum4 from "../../Assets/Logoipsum3.svg";
import herologo1 from "../../Assets/hero-moon.svg";
import herologo2 from "../../Assets/hero-play.svg";
import herologo3 from "../../Assets/hero-user.svg";

function Section() {

    const heroCards = [
        {
            img: herologo1,
            title: "What I can do for you",
            desc: "Faster, better products that your users love. Here's all the services I provide:",
            list: [
                "Design Strategy",
                "Web and Mobile App Design",
                "Front-end Development"
            ]
        },

        {
            img: herologo2,
            title: "Applications I'm fluent in",
            desc: "Every designer needs the right tools to do the perfect job. Thankfully, I'm multilingual.",
            list: [
                "Sketch",
                "Webflow",
                "Figma"
            ]
        },
        {
            img: herologo3,
            title: "What you can expect",
            desc: "I design products that are more than pretty. I make them shippable and usable.",
            list: [
                "Clean and functional",
                "Device and user friendly",
                "Efficient and maintainable"
            ]
        }
    ];


    return (
        <div className="main">
            <div className="section">
                <div className="section-about">
                    <h2><span>I design products</span> <br />that delight and inspire people.</h2>
                    <p>Hi! I’m Jake, a product designer based in Berlin. I create user-friendly interfaces for fast-growing startups.</p>
                    <div className="stn-btns">
                        <button>Book a call</button>
                        <button>Download CV <i className="fas fa-arrow-right"></i></button>
                    </div>
                </div>

                <div className="section-img">
                    <img src={UserAvatar} />
                </div>
            </div>
            <div className="section-brend">
                <h2>Trusted by</h2>
                <div className="brends-logo">
                    <img src={logoipsum1} />
                    <img src={logoipsum2} />
                    <img src={logoipsum3} />
                    <img src={logoipsum4} />
                </div>
            </div>

            <div className="section-hero">
                <div className="hero-name">
                    <span>Services</span>
                    <h2>Design that solves problems, one product at a time.</h2>
                </div>

                <div className="hero-cards">

                    {heroCards.map((card, idx) => (
                        <div className="hero-card" key={idx}>
                            <img src={card.img} alt="" />
                            <h3>{card.title}</h3>
                            <p>{card.desc}</p>

                            <ul className="hero-ul">
                                {card.list.map((item, i) => (
                                    <li key={i}>
                                        <a>{item}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Section;