import { IKnowledgeCard } from "../../types.d";
import { Skill } from "../Skill";
import { getInfo } from "../../lib/tools";
import "./index.scss";

export function KnowledgeCard(props: IKnowledgeCard & { className?: string }) {
  const { img } = getInfo(props.tool);
  return (
    <div
      data-tip={props.tool}
      className={`${
        props.className ?? ""
      } tool d-flex flex-column align-items-center justify-content-end p-1`}
    >
      <img src={img} alt="" />
      <Skill className="mt-1" knowledgeLevel={props.knowledgeLevel} />
    </div>
  );
}
