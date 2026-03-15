const Skill = (props) => {
    return (
        <div className="tags" style={{backgroundColor: props.color}}>
            <span>{props.skill} {props.emoji}</span>
        </div>

    )
};

export default Skill;