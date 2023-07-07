import Link from "next/link";
import React from "react";

const SkillCard = ({ tag, link }) => {
  return (
    <Link href={link} className="skill_tag ">
      <span className="flex justify-center text-slate-300 text-center px-3">
        {tag}
      </span>
    </Link>
  );
};

export default SkillCard;
