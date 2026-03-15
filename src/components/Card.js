import SkillList from "./SkillList";
import Name from "./Name";
import Avatar from "./Avatar";

const Card = () => {
    return (
        <div className="cardContainer">
            <Avatar />
            <div className="cardBody">
                <Name />
                <SkillList />
            </div>
        </div>
    )
};

export default Card;