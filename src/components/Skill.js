const Skill = ({skill, level, color}) => {
  return (
    <div className="tags" style={{ backgroundColor: color }}>
      <span>
        {skill}{" "}

        {/* Ternary operator method */}
        
        {/* {level === "advanced"
          ? "💪"
          : level === "intermediate"
            ? "👍"
            : "👶"} */}
      
        {/* Short circuiting method */}

        <span>
            {level === "beginner" && "👶"}
            {level === "intermediate" && "👍"}
            {level === "advanced" && "💪"}
        </span>
      </span>
    </div>
  );
};

export default Skill;
