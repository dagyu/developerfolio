import { Fade } from "react-awesome-reveal";
import { CardList } from "../components/CardList";
import logoritmu from "../assets/logos/logo-ritmu.png";
import logocefriel from "../assets/logos/logo-cefriel.svg";

const experiences = [
  {
    duration: "Sept 2021 - Sept 2022",
    role: "Frontend Developer, DevOps Engineer",
    typeOfWork: "Internship",
    desc: `I did a one-year internship at the Cefriel company where I was able to:
* develop a website in Angular
* engineer CI/CD pipeline
* develop some internal business software components

It was my first experience in a company and it was very formative from a teamwork and time management point of view.`,
    logo: logocefriel,
  },
  {
    duration: "2019-2020",
    role: "Software Engineer, Full Stack Developer",
    typeOfWork: "Freelance",
    desc: `
I developed a mobile app with [tomgeek27](https://github.com/tomgeek27) and [Alice Paracolli](https://www.behance.net/aaliceparaf66a) for a client. 
The app monitors diaphragmatic breathing via the accelerometer sensor and it analyzes the obtained respiratory chart,
if you are curious see it on [Google Play](https://play.google.com/store/apps/details?id=com.ritmu.app) or on [App Store](https://apps.apple.com/us/app/id1514766559).
This was a really challenging experience because It was the first time I faced a real world case. 

In particular I:

* designed the architecture
* developed the whole back-end part, 
* developed an algorithm that analyze the breath frequency using machine learning techniques 
* developed some front-end components.
    `,
    logo: logoritmu,
  },
];

export function Experiences() {
  return (
    <div className="container-lg">
      <Fade duration={1000} triggerOnce>
        <h1 className="text-uppercase">Experiences</h1>
      </Fade>
      {experiences.map((experience, index) => (
        <div key={index} className="row mt-4">
          <Fade direction="right" duration={1000} triggerOnce>
            <CardList
              duration={experience.duration}
              title={experience.role}
              subtitle={experience.typeOfWork}
              content={experience.desc}
              logo={experience.logo}
            />
          </Fade>
        </div>
      ))}
    </div>
  );
}
