import ReactMarkdown from "react-markdown";
import { IExperienceCard } from "../types.d";

export function ExperienceCard({ experience }: IExperienceCard) {
  return (
    <div className="container-fluid border-bottom border-1 border-dark pb-2">
      <div className="row m-1">
        <div className="col-md-3 d-flex flex-column justify-content-center align-items-center">
          <div>
            <span className="badge bg-primary">{experience.duration}</span>
          </div>
          <div>
            {experience.typeOfWork && <span>{experience.typeOfWork}</span>}
          </div>
        </div>
        <div className="col">
          <div className="d-flex justify-content-between mb-1">
            <div className="d-flex align-items-center">
              <h5>{experience.role}</h5>
            </div>
            <div className="d-flex align-items-center">
              {experience.logo && (
                <img
                  alt={experience.role}
                  src={experience.logo}
                  style={{ width: "100%", maxWidth: "64px" }}
                />
              )}
            </div>
          </div>
          <ReactMarkdown>{experience.desc}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
