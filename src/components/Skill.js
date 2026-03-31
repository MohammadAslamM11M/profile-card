const Skill = (props) => {
  return (
    <div className="tags" style={{ backgroundColor: props.color }}>
      <span>
        {props.skill}{" "}
        {props.level === "advanced"
          ? "💪"
          : props.level === "intermediate"
            ? "👍"
            : "👶"}
      </span>
    </div>
  );
};

export default Skill;
