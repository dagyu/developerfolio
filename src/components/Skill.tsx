import emojii from "react-easy-emoji";
import { KnowledgeLevel } from "../lib/enums";
import { ISkill } from "../types.d";

export function Skill({ knowledgeLevel, className }: ISkill) {
  switch (knowledgeLevel) {
    case KnowledgeLevel.learn:
      return <div className={className}>{emojii("📚")}</div>;
    case KnowledgeLevel.base:
      return <div className={className}>{emojii("⭐")}</div>;
    case KnowledgeLevel.medium:
      return <div className={className}>{emojii("⭐⭐")}</div>;
    case KnowledgeLevel.advanced:
      return <div className={className}>{emojii("⭐⭐⭐")}</div>;
    default:
      return <></>;
  }
}
