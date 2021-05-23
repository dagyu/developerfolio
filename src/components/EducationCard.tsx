import ReactMarkdown from "react-markdown";
import { IEducationCard } from "../types.d";

export function EducationCard({ school }: IEducationCard) {
  return (
    <div className="container-fluid border-bottom border-1 border-dark pb-2">
      <div className="row m-1">
        <div className="col-md-3 d-flex justify-content-center align-items-center">
          <span className="badge bg-primary my-2">{school.duration}</span>
        </div>
        <div className="col">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-column justify-content-center">
              <h3 className="text-uppercase">{school.schoolName}</h3>
              <h4 className="text-secondary">{school.subHeader}</h4>
            </div>
            <div className="d-flex align-items-center">
              {school.logo && (
                <img
                  alt={school.schoolName}
                  src={school.logo}
                  style={{
                    width: "100%",
                    maxWidth: "64px",
                    maxHeight: "64px",
                  }}
                />
              )}
            </div>
          </div>
          <ReactMarkdown>{school.desc}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
