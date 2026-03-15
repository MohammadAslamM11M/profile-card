import React from "react";

const Card = () => {
    return (
        <div className="cardContainer">
            <img className="cardImg" src="./logo192.png" alt="profile image" />
            <div className="cardBody">
                <h1>Jon Doe</h1>
                <p>Full-stack web developer at XYZ. When not coding, I like playing video games, ride bike or to just spend time with family</p>
                <div className="cardTags">
                    <p className="tags">HTML+CSS💪</p>
                    <p className="tags">Javascript💪</p>
                    <p className="tags">Web Design💪</p>
                    <p className="tags">Git and GitHub👍</p>
                    <p className="tags">React💪</p>
                </div>

            </div>
        </div>
    )
};

export default Card;