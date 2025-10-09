import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
const SkillItem = (props) => {
  return (
    <div className="col-12 col-md-6 col-lg-4  p-2" data-aos={props.effect}>
      <div className="border px-4 py-5 skill-item">
        <p className="skill-item-icon">
          <span className="border p-2">
            {props.icon ? (
              <FontAwesomeIcon icon={props.icon} />
            ) : props.name === "NextJS" ? (
              <SiNextdotjs className="skill-item-icon" title="Next.js" />
            ) : props.name === "TailwindCSS" ? (
              <SiTailwindcss className="skill-item-icon" title="Tailwind CSS" />
            ) : props.name === "TypeScript" ? (
              <SiTypescript className="skill-item-icon" title="TypeScript" />
            ) : null}
          </span>
        </p>
        <h5 className="mt-3">{props.name}</h5>
      </div>
    </div>
  );
};

export default SkillItem;
