import Skill from "./Skill";

const SkillList = () => {
  const skills = [
    {
      skill: "HTML+CSS",
      level: "advanced",
      color: "#2662ea",
    },
    {
      skill: "JavaScript",
      level: "advanced",
      color: "#efd81d",
    },
    {
      skill: "Web Design",
      level: "advanced",
      color: "#c3dcaf",
    },
    {
      skill: "Git and GitHub",
      level: "intermediate",
      color: "#e84f33",
    },
    {
      skill: "React",
      level: "advanced",
      color: "#60dafb",
    },
    {
      skill: "Svelte",
      level: "beginner",
      color: "#ee8300",
    },
  ];
  return (
    <div className="cardTags">
      {skills.map((s) => (
        <ul key={s.id}>
          <Skill
            skill={s.skill}
            level={s.level}
            color={s.color}
          />
        </ul>
      ))}
    </div>
  );
};

export default SkillList;
