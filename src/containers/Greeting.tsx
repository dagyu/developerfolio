import { Fade } from "react-awesome-reveal";
import emoji from "react-easy-emoji";
import ReactMarkdown from "react-markdown";

const resumeLink = process.env.REACT_APP_RESUME_LINK;

const desc = `
I am a software engineer and a passionate programmer.

I had experience with Web and Mobile development.

In general I prefer to write code and design software 
architectures rather than  dealing with graphics or UI stuff.
`;
export function Greeting() {
  return (
    <Fade duration={1000} direction="down" triggerOnce>
      <div className="greeting container-lg d-flex justify-content-center align-items-center">
        <div className="d-flex flex-column flex-lg-row justify-content-center">
          <div className="description-block flex-1 order-1 order-lg-0 d-flex justify-content-around flex-column me-2">
            <h1 className="d-flex align-items-center justify-content-center">
              {"Hi all I'm Gaetano"}
              <span className="ms-1">{"👋"}</span>
            </h1>
            <ReactMarkdown className="text-center" children={desc} />
            <div className="d-flex justify-content-around">
              <a
                className="btn btn-outline-primary text-uppercase"
                href="#contacts"
              >
                Contact me<i className="ms-1 fas fa-id-card"></i>
              </a>
              {resumeLink ? (
                <a
                  className="btn btn-outline-primary text-uppercase"
                  href={resumeLink}
                >
                  My CV<i className="ms-1 fas fa-download"></i>
                </a>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="photo-block flex-1 order-0 order-lg-1 d-flex justify-content-center align-items-center">
            <img
              className="rounded-circle m-3 profile-image"
              src="https://raw.githubusercontent.com/dagyu/resume/main/images/profile.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </Fade>
  );
}
