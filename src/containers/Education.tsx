import { Fade } from "react-awesome-reveal";
import { EducationCard } from "../components/EducationCard";

const education = [
  {
    duration: "2018 - in progress",
    schoolName: "University of Milan",
    subHeader: "Master’s Degree",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/e4/University_of_Milan_logo.png",
    desc: "",
    descBullets: [],
  },
  {
    duration: "Sep 2019 - Feb 2020",
    schoolName: "University of Paris-Saclay",
    subHeader: "Erasmus",
    logo: "https://i2.wp.com/scholars4is.com/wp-content/uploads/2020/04/10.png?fit=830%2C433&ssl=1",
    desc: "I followed a master of Data Science and passed 5 exams. That was a really intensive experience where I improved a lot my adaptive skills.",
  },
  {
    duration: "2015 - 2018",
    schoolName: "University of Milan",
    subHeader: "Bachelor Degree",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/e4/University_of_Milan_logo.png",
    desc: "**Final mark**: 108/110\n\n**Thesis title**: DSL in Neverlang for reflective petri nets\n\n**Supervisor**: [Walter Cazzola](https://cazzola.di.unimi.it/)",
  },
];

export function Education() {
  return (
    <div className="container-lg">
      <Fade duration={1000} triggerOnce>
        <h1 className="text-center text-uppercase">Education</h1>
      </Fade>
      {education.map((school, index) => (
        <div className="row mt-4" key={index}>
          <Fade direction="left" duration={1000} triggerOnce>
            <EducationCard school={school} />
          </Fade>
        </div>
      ))}
    </div>
  );
}
