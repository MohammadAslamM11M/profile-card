import Skill from "./Skill";

const SkillList = () => {
    return (
        <div className="cardTags">
            <Skill skill="HTML+CSS" emoji="💪" color="hotpink" />
            <Skill skill="Javascript" emoji="💪" color="lavender" />
            <Skill skill="Web Design" emoji="💪" color="Wheat" />
            <Skill skill="Git and GitHub" emoji="👍" color="gold" />
            <Skill skill="React" emoji="💪" color="skyblue" />
        </div>

    )
};

export default SkillList;