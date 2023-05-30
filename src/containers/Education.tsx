import { Fade } from "react-awesome-reveal";
import { CardList } from "../components/CardList";
import logoups from "../assets/logos/logo-ups.svg";

const education = [
  {
    duration: "2018 - 2023",
    schoolName: "University of Milan",
    subHeader: "Master of Science",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/e4/University_of_Milan_logo.png",
    desc: "**Final mark**: 110/110 cum laude\n\n**Thesis title**:  An extensible typesystem for language server protocol development\n\n**Supervisor**: [Walter Cazzola](https://cazzola.di.unimi.it/)",
    descBullets: [],
  },
  {
    duration: "Sep 2019 - Feb 2020",
    schoolName: "University of Paris-Saclay",
    subHeader: "Erasmus",
    logo: logoups,
    desc: "I followed a master of Data Science and passed 5 exams. That was a really intensive experience where I improved a lot my adaptive skills.",
  },
  {
    duration: "2015 - 2018",
    schoolName: "University of Milan",
    subHeader: "Bachelor of Science",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/e4/University_of_Milan_logo.png",
    desc: "**Final mark**: 108/110\n\n**Thesis title**: DSL in Neverlang for reflective petri nets\n\n**Supervisor**: [Walter Cazzola](https://cazzola.di.unimi.it/)",
  },
];

export function Education() {
  return (
    <div className="container-lg">
      <Fade duration={1000} triggerOnce>
        <h1 className="text-uppercase">Education</h1>
      </Fade>
      {education.map((school, index) => (
        <div className="row mt-4" key={index}>
          <Fade direction="left" duration={1000} triggerOnce>
            <CardList
              title={school.schoolName}
              subtitle={school.subHeader}
              logo={school.logo}
              content={school.desc}
              duration={school.duration}
            />
          </Fade>
        </div>
      ))}
    </div>
  );
}
