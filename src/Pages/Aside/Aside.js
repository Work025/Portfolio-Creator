import "../../Stayls/Aside.css";

function Aside() {

    const asidecard = [
        {
            date: "April 16, 2021",
            time: "6 mins",
            title: "Design tips for designers, that cover everything you need",
            linkText: "Read the article"
        },
        {
            date: "April 16, 2021",
            time: "5 mins",
            title: "How to build rapport with your web design clients",
            linkText: "Read the article"
        },
        {
            date: "April 16, 2021",
            time: "5 mins",
            title: "Top 6 free website mockup tools 2021",
            linkText: "Read the article"
        },
        {
            date: "April 16, 2021",
            time: "7 mins",
            title: "Logo design trends to avoid in 2021",
            linkText: "Read the article"
        },
        {
            date: "April 16, 2021",
            time: "4 mins",
            title: "22 best UI design tools",
            linkText: "Read the article"
        }
    ];

    return (
        <div className="aside">
            <div className="aside-name">
                <span>BLOGS</span>
                <h2>Latest Blogs</h2>
                <p>View all <i className="fas fa-arrow-right"></i></p>
            </div>
            <div className="aside-blogs">
                {asidecard.map((card, index) => (
                    <div className="aside-card" key={index}>
                        <span>{card.date} . {card.time}</span>
                        <h3>{card.title}</h3>
                        <p>{card.linkText} <i className="fas fa-arrow-right"></i></p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Aside;