import { Fade } from "react-awesome-reveal";
import { ExperienceCard } from "../components/ExperienceCard";

const experiences = [
  {
    duration: "2019-2020",
    role: "Software Engineer/Full Stack Developer",
    typeOfWork: "freelance",
    desc: `I developed a mobile app with [tomgeek27](https://github.com/tomgeek27) for a client. 
    This app monitors diaphragmatic breathing via the accelerometer sensor and analyzes the respiratory chart obtained,
    if you are curious see it on [Google Play](https://play.google.com/store/apps/details?id=com.ritmu.app) or on [App Store](https://apps.apple.com/us/app/id1514766559).
    This was a really challenging experience because It was the first time I faced a real world case. 
    In particular I designed the architecture, developed the whole back-end part, developed an 
    algorithm that analyze the breath frequency using machine learning techniques and developed some front-end components.
    `,
    logo: " https://www.ritm-u.com/wp-content/uploads/2020/02/cropped-cropped-New-logo-yu-tuberrr-4-2.png",
  },
];

export function Experiences() {
  return (
    <div className="container-lg">
      <Fade duration={1000} triggerOnce>
        <h1 className="text-uppercase text-center">Experience</h1>
      </Fade>
      {experiences.map((experience, index) => (
        <div key={index} className="row mt-4">
          <Fade direction="right" duration={1000} triggerOnce>
            <ExperienceCard experience={experience} />
          </Fade>
        </div>
      ))}
    </div>
  );
}
