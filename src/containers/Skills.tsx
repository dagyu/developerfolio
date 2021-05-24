import developer from "../assets/lottie/developer.json";
import Lottie from "lottie-react";
import { Fade } from "react-awesome-reveal";
import { Skill } from "../components/Skill";
import { IKnowledgeCard } from "../types.d";
import { KnowledgeCard } from "../components/KnowledgeCard";
import ReactMarkdown from "react-markdown";
import { getEnumKeys, KnowledgeLevel } from "../lib/enums";
import { useState } from "react";

type TSkillList = { title: string; list: Array<IKnowledgeCard> };

const skills: Array<TSkillList> = [
  {
    title: "languages",
    list: [
      { tool: "dart", knowledgeLevel: KnowledgeLevel.advanced },
      { tool: "javascript", knowledgeLevel: KnowledgeLevel.advanced },
      { tool: "typescript", knowledgeLevel: KnowledgeLevel.advanced },
      { tool: "java", knowledgeLevel: KnowledgeLevel.advanced },
      { tool: "python", knowledgeLevel: KnowledgeLevel.advanced },
      { tool: "swift", knowledgeLevel: KnowledgeLevel.medium },
      { tool: "php", knowledgeLevel: KnowledgeLevel.base },
      { tool: "scala", knowledgeLevel: KnowledgeLevel.base },
      { tool: "kotlin", knowledgeLevel: KnowledgeLevel.base },
      { tool: "ocaml", knowledgeLevel: KnowledgeLevel.base },
      { tool: "erlang", knowledgeLevel: KnowledgeLevel.base },
      { tool: "c", knowledgeLevel: KnowledgeLevel.base },
      { tool: "csharp", knowledgeLevel: KnowledgeLevel.base },
      { tool: "cpp", knowledgeLevel: KnowledgeLevel.base },
      { tool: "go", knowledgeLevel: KnowledgeLevel.base },
      { tool: "rust", knowledgeLevel: KnowledgeLevel.learn },
    ],
  },
  {
    title: "backend",
    list: [
      { tool: "nodejs", knowledgeLevel: KnowledgeLevel.advanced },
      { tool: "spring", knowledgeLevel: KnowledgeLevel.base },
      { tool: "ktor", knowledgeLevel: KnowledgeLevel.learn },
    ],
  },
  {
    title: "web & mobile frontend",
    list: [
      { tool: "flutter", knowledgeLevel: KnowledgeLevel.advanced },
      { tool: "react", knowledgeLevel: KnowledgeLevel.advanced },
    ],
  },
  {
    title: "desktop frontend",
    list: [{ tool: "electron", knowledgeLevel: KnowledgeLevel.base }],
  },
  {
    title: "data exchange",
    list: [
      { tool: "graphql", knowledgeLevel: KnowledgeLevel.medium },
      { tool: "grpc", knowledgeLevel: KnowledgeLevel.medium },
      { tool: "rest", knowledgeLevel: KnowledgeLevel.medium },
    ],
  },
  {
    title: "data storage and management",
    list: [
      { tool: "strapi", knowledgeLevel: KnowledgeLevel.advanced },
      { tool: "mongodb", knowledgeLevel: KnowledgeLevel.advanced },
      { tool: "mysql", knowledgeLevel: KnowledgeLevel.medium },
      { tool: "postgresql", knowledgeLevel: KnowledgeLevel.medium },
    ],
  },
  {
    title: "game programming and computer graphics",
    list: [
      { tool: "unity", knowledgeLevel: KnowledgeLevel.base },
      { tool: "opengl", knowledgeLevel: KnowledgeLevel.base },
      { tool: "vulkan", knowledgeLevel: KnowledgeLevel.learn },
      { tool: "unreal", knowledgeLevel: KnowledgeLevel.learn },
    ],
  },
  {
    title: "sysadmin stuff",
    list: [
      { tool: "docker", knowledgeLevel: KnowledgeLevel.advanced },
      { tool: "aruba", knowledgeLevel: KnowledgeLevel.advanced },
      { tool: "gcloud", knowledgeLevel: KnowledgeLevel.medium },
      { tool: "render", knowledgeLevel: KnowledgeLevel.medium },
      { tool: "ovh", knowledgeLevel: KnowledgeLevel.medium },
      { tool: "netlify", knowledgeLevel: KnowledgeLevel.medium },
      { tool: "kubernetes", knowledgeLevel: KnowledgeLevel.base },
      { tool: "nginx", knowledgeLevel: KnowledgeLevel.base },
    ],
  },
  {
    title: "editors",
    list: [
      { tool: "vscode", knowledgeLevel: KnowledgeLevel.advanced },
      { tool: "intellij", knowledgeLevel: KnowledgeLevel.advanced },
      { tool: "androidstudio", knowledgeLevel: KnowledgeLevel.medium },
      { tool: "xcode", knowledgeLevel: KnowledgeLevel.medium },
    ],
  },
];

const legend: Array<string> = [
  "I would like to learn it or I am learning it but I have not practiced yet.",
  "I have practiced but I have never developed a full project with it.",
  "I have a good knowledge about it and I used it to develop a full project (academic or personal).",
  "I have an advanced knowledge about it and I have used it to develop a production ready project.",
];

const skillText = `
Here you can find all my skills and knowledge related to the computer world grouped semantically. The list you find is always *continuously updated*.


You can also **filter** the following list by clicking the buttons below and if you want to know more about the meaning of the icons, read this [legend](#legend)!
`;

export function Skills() {
  const [knowledgeLevels, setKnowledgeLevels] = useState<Array<Boolean>>(
    getEnumKeys(KnowledgeLevel).map((e) => true)
  );

  const createSkillList = (e: TSkillList, i: number) => (
    <div className="row d-flex align-items-center flex-column mt-3" key={i}>
      <h5 className="text-uppercase text-center">{e.title}</h5>
      <div className="d-flex flex-wrap justify-content-center">
        {e.list
          .filter((e) => knowledgeLevels[e.knowledgeLevel])
          .map((e, i) => (
            <KnowledgeCard key={i} className="m-1" {...e} />
          ))}
      </div>
    </div>
  );

  return (
    <Fade direction="left" duration={1000} triggerOnce>
      <div className="container-lg">
        <div className="row text-center">
          <h1 className="text-uppercase">skills and knowledge</h1>
        </div>
        <div className="row text-center justify-content-center">
          <ReactMarkdown className="col-md-10">{skillText}</ReactMarkdown>
        </div>
        <div className="row ">
          <div className="d-flex justify-content-center">
            {getEnumKeys(KnowledgeLevel).map((e, i) => (
              <button
                className={`btn ${
                  knowledgeLevels[i] ? "btn-primary" : ""
                } btn-outline-primary mx-1`}
                onClick={() =>
                  setKnowledgeLevels(
                    knowledgeLevels.map((element, index) =>
                      index === i ? !element : element
                    )
                  )
                }
                key={i}
              >
                <Skill knowledgeLevel={e} />
              </button>
            ))}
          </div>
        </div>
        <div className="row"></div>
        <div className="row">
          <div className="col-sm">
            {skills.slice(0, Math.ceil(skills.length / 2)).map(createSkillList)}
          </div>
          <div className="col-sm">
            {skills.slice(Math.ceil(skills.length / 2)).map(createSkillList)}
          </div>
        </div>
        <div className="row align-items-center mt-3">
          <div className="col d-none d-sm-block">
            <Lottie animationData={developer} autoPlay={true} loop={true} />
          </div>
          <div className="col" id="legend">
            <h4 className="text-center">Legend</h4>
            <div className="d-flex flex-column">
              {legend.map((e, i) => (
                <div key={i} className="row align-items-center">
                  <Skill className="col-md-2" knowledgeLevel={i} />
                  <div className="col-md-10">
                    <ReactMarkdown>{e}</ReactMarkdown>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
