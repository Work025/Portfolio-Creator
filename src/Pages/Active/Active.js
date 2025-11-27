import "../../Stayls/Active.css";
import img1 from "../../Assets/active-phone.svg";
import img2 from "../../Assets/active-student.svg";
import img3 from "../../Assets/active-laptop.svg";
import img4 from "../../Assets/active-teacher.svg";

function Active() {
    return (
        <div className="active">
            <div className="about">

                {/* TOP SECTION */}
                <div className="about-top">
                    <div className="left-text">
                        <p className="small-title">PRODUCT DESIGNER</p>
                        <h1 className="big-title">That's me!</h1>
                    </div>

                    <p className="top-desc">
                        Over the past 12 years, I’ve worked with a diverse range of clients,
                        from startups to Fortune 500 companies. I love crafting interfaces
                        that delight users and help businesses grow.
                    </p>
                </div>

                {/* IMAGES GRID */}
                <div className="about-images">
                    <div className="img-box">
                        <img src={img1} alt="" />
                    </div>
                    <div className="img-box">
                        <img src={img2} alt="" />
                    </div>

                    <div className="img-col">
                        <img src={img3} className="small-img" />
                        <img src={img4} className="small-img" />
                    </div>
                </div>

                <div className="edu-work">

                    {/* LEFT — EDUCATION */}
                    <div className="left">
                        <h2 className="title">
                            📚 Education
                        </h2>

                        <div className="item">
                            <div>
                                <h3>Stanford University</h3>
                                <p>MSc (Human Computer Interaction)</p>
                            </div>
                            <span className="date">2013-2015</span>
                        </div>

                        <div className="item">
                            <div>
                                <h3>MIT Summer School</h3>
                                <p>UX Training Bootcamp</p>
                            </div>
                            <span className="date">2013-2014</span>
                        </div>

                        <div className="item">
                            <div>
                                <h3>California State University</h3>
                                <p>BSc in Software Engineering</p>
                            </div>
                            <span className="date">2009-2012</span>
                        </div>
                    </div>

                    {/* RIGHT — WORK EXPERIENCE */}
                    <div className="right">
                        <h2 className="title">
                            💼 Work Experience
                        </h2>

                        <div className="item">
                            <div className="company">
                                <div className="icon pink"></div>
                                <div>
                                    <h3>SpaceFleet</h3>
                                    <p>Senior Product Designer</p>
                                </div>
                            </div>
                            <span className="date">April 2019 – Current</span>
                        </div>

                        <div className="item">
                            <div className="company">
                                <div className="icon blue"></div>
                                <div>
                                    <h3>MusicMash</h3>
                                    <p>Information Architect</p>
                                </div>
                            </div>
                            <span className="date">April 2016 – May 2017</span>
                        </div>

                        <div className="item">
                            <div className="company">
                                <div className="icon yellow"></div>
                                <div>
                                    <h3>Kingdom</h3>
                                    <p>UI Designer</p>
                                </div>
                            </div>
                            <span className="date">April 2016 – May 2017</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Active;