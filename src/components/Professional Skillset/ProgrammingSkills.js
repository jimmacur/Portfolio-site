import classes from "./programmingSkills.module.css";
import { ReactJS, JavaScript, Git, GitHub, PostgreSQL, Postman, JSON, Ruby, Rails, RSPEC, Cypress, Slack, Heroku, Netlify } from "../asset/svg/svg";
import { useSelector } from "react-redux";
const skills = [ReactJS, Rails, Ruby, JavaScript, RSPEC, Cypress, Slack, Postman, Git, GitHub, Heroku, Netlify];
const skillNames=["ReactJs", "Rails", "Ruby", "JavaScript", "RSPEC", "Cypress", "Slack", "Postman", "Git", "Github", "Heroku", "Netlify"];
const ProgrammingSkills = (props) => {

    const uiColor=useSelector(state=>state.uiColor);
    const nonThemeColor = useSelector(state => state.nonThemeColor);

    return (
      <div className={classes.mainCard}>
        <h1 style={{color:nonThemeColor}}>Programming <span style={{ color:uiColor}}>SkillSet</span></h1>
        <div className={classes.skillSetCard} style={{ color: nonThemeColor }}>
          {skills.map((Item, index) =>
            <div className={classes.skillItem} style={{borderColor:uiColor}} key={index}>
              <Item />
              <span className={classes.skillName}>{skillNames[index]}</span>
            </div>
          )}
        </div>
      </div>

    )
};

export default ProgrammingSkills;

// import classes from "./programmingSkills.module.css";
// import { Ruby, Rails, SQL, ReactJS, JavaScript, HTML, CSS, Cypress, RSpec } from "../asset/svg/svg";
// import { useSelector } from "react-redux";

// const skills = [Ruby, Rails, SQL, ReactJS, JavaScript, HTML, CSS, Cypress, RSpec];
// const skillNames = ["Ruby", "Rails", "SQL", "ReactJS", "JavaScript", "HTML", "CSS", "Cypress", "RSpec"];

// const ProgrammingSkills = () => {
//     const uiColor = useSelector(state => state.uiColor);
//     const nonThemeColor = useSelector(state => state.nonThemeColor);

//     return (
//         <div className={classes.mainCard}>
//             <h1 style={{ color: nonThemeColor }}>
//                 Programming <span style={{ color: uiColor }}>SkillSet</span>
//             </h1>
//             <div className={classes.skillSetCard} style={{ color: nonThemeColor }}>
//                 {skills.map((Item, index) => (
//                     <div className={classes.skillItem} style={{ borderColor: uiColor }} key={index}>
//                         <Item />
//                         <span className={classes.skillName}>{skillNames[index]}</span>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ProgrammingSkills;