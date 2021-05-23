import { Fade } from "react-awesome-reveal";
import emoji from "react-easy-emoji";
import { SocialMedia } from "../components/SocialMedia/SocialMedia";
import { ISocialMedia } from "../types.d";

const contacts: Array<ISocialMedia> = [
  {
    url: "https://www.facebook.com/gaetano.dagostino.16/",
    socialMedia: "facebook",
  },
  {
    url: "https://github.com/dagyu",
    socialMedia: "github",
  },
  {
    url: "mailto:daguy95dev@gmail.com",
    socialMedia: "gmail",
  },
  {
    url: "https://www.linkedin.com/in/dagyu/",
    socialMedia: "linkedin",
  },
  {
    url: "https://www.upwork.com/freelancers/~0146f29af24cb6b4ee",
    socialMedia: "upwork",
  },
];

export function Contacts() {
  return (
    <Fade direction={"left"} duration={1000} triggerOnce>
      <div className="container-lg">
        <div className="row">
          <div className="col">
            <h1 className="text-uppercase">Contact me!</h1>
            <h4 className="text-uppercase text-secondary">
              Discuss a project or just want to say hi? My inbox is open for all
              {emoji("🤗🤗")}
            </h4>
          </div>
        </div>
        <div className="row">
          <p>
            <span className="me-1">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <span>Milan, Italy</span>
          </p>
        </div>
        <div className="d-flex">
          {contacts.map((e, i) => (
            <SocialMedia key={i} {...e} />
          ))}
        </div>
      </div>
    </Fade>
  );
}
