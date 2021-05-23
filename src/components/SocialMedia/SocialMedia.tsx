import { ISocialMedia, TSocialMedia } from "../../types.d";
import upwork from "../../assets/social/upwork.png";
import gmail from "../../assets/social/gmail.png";
import linkedin from "../../assets/social/linkedin.png";
import github from "../../assets/social/github.png";
import facebook from "../../assets/social/facebook.png";
import "./SocialMedia.scss";

function getIcon(socialMedia: TSocialMedia) {
  switch (socialMedia) {
    case "facebook":
      return <img src={facebook} alt="" />;
    case "github":
      return <img src={github} alt="" />;
    case "gmail":
      return <img src={gmail} alt="" />;
    case "linkedin":
      return <img src={linkedin} alt="" />;
    case "upwork":
      return <img src={upwork} alt="" />;
  }
}

export function SocialMedia(props: ISocialMedia) {
  return (
    <a
      href={props.url}
      className="icon-button"
      target="_blank"
      rel="noopener noreferrer"
      children={getIcon(props.socialMedia)}
    />
  );
}
