import "../../Stayls/User.css";
import speed from "../../Assets/speed.svg";

function Users() {
    return (
        <div className="users">
            <div className="users-name">
                <span>Testimonials</span>
                <h2>Word on the street</h2>
            </div>

            <div className="users-comment">
                <img src={speed} />
                <div className="users-about">
                    <span>"</span>
                    <h2>Jade helped us build a software so intuitive that it didn't need a walkthrough. He solved complex problems with brilliant design.</h2>
                    <div className="user-slid">
                        <div className="slid-name">
                            <h4>John Frankin</h4>
                            <p>Founder, Double Bunch</p>
                        </div>
                        <div className="user-next">
                            <i className="fas fa-chevron-left"></i>
                            <i className="fas fa-chevron-right"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Users;