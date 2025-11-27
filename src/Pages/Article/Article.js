import "../../Stayls/Article.css";
import articlelogo1 from "../../Assets/articlecard1.svg";
import articlelogo2 from "../../Assets/articlecard2.svg";
import articlelogo3 from "../../Assets/articlecard3.svg";

function Article() {

    const articles = [
        {
            img: articlelogo1,
            category: "Branding",
            title: "Soulful Rebrand",
            desc: "View Project"
        },
        {
            img: articlelogo2,
            category: "Product Design",
            title: "Datadash Product design",
            desc: "View Project"
        },
        {
            img: articlelogo3,
            category: "Web Design",
            title: "Maize Website Design",
            desc: "View Project"
        }
    ];

    return (
        <div className="article">
            <div className="article-name">
                <h2>
                    <span>PROJECTS</span>
                    I bring results.<br />
                    My clients are proof.
                </h2>
                <button>View all projects</button>
            </div>
            <div className="article-cards">
                {articles.map((article, idx) => (
                    <div className="article-card" key={idx}>
                        <img src={article.img} alt="" />
                        <span>{article.category}</span>
                        <h3>{article.title}</h3>
                        <p>{article.desc} <i className="fas fa-arrow-right"></i></p>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default Article;