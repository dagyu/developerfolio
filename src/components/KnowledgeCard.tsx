import { IKnowledgeCard } from "../types.d";
import { Tools } from "./Tools";
import { Skill } from "./Skill";

export function KnowledgeCard(props: IKnowledgeCard & { className?: string }) {
  return (
    <div
      className={`${
        props.className ?? ""
      } d-flex flex-column align-items-center justify-content-end`}
    >
      <Tools tool={props.tool} />
      <Skill className="mt-1" knowledgeLevel={props.knowledgeLevel} />
    </div>
  );
}
