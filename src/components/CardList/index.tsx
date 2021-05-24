import ReactMarkdown from "react-markdown";
import { ICardList } from "../../types.d";

export function CardList(props: ICardList) {
  return (
    <div className="container-fluid border-bottom border-1 border-dark pb-2">
      <div className="row m-1">
        <div className="col-md-3 d-flex flex-column justify-content-around align-items-center">
          {props.logo && (
            <img
              className="m-2"
              alt=""
              src={props.logo}
              style={{ width: "50%" }}
            />
          )}
        </div>
        <div className="col">
          <div className="d-flex flex-column flex-md-row justify-content-between mb-1">
            <div className="d-flex flex-column justify-content-center">
              <h5 className="text-uppercase">{props.title}</h5>
              {props.subtitle && (
                <h6 className="text-secondary">{props.subtitle}</h6>
              )}
            </div>
            <div className="d-flex align-items-center">
              <span className="badge bg-primary">{props.duration}</span>
            </div>
          </div>
          {props.content && (
            <div style={{ textAlign: "justify" }}>
              <ReactMarkdown children={props.content} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
