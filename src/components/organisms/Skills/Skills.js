import React from "react";
import * as styles from "./Skills.module.scss";

import Section from "@templates/SectionTemplate/SectionTemplate";
import SkillsQuery from "@src/config/skillsQuery";
import SkillsItem from "@atoms/SkillsItem/SkillsItem";

const Skills = () => {
   const [skills, setSkills] = React.useState([]);
   return (
      <Section title={"Technologies & Skills"}>
         <SkillsQuery setSkills={setSkills} />
         <div className={styles.wrapper}>
            {skills.map((item) => {
               item = item.node;
               console.log(item);

               return (
                  <SkillsItem
                     key={item.id}
                     imageUrl={item.icon.url}
                     name={item.name}
                     level={item.level}
                     background={item.background.hex}
                     text={item.text.hex}
                  />
               );
            })}
         </div>
      </Section>
   );
};

export default Skills;
