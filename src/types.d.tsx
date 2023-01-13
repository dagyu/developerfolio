import { KnowledgeLevel } from "./lib/enums";

export interface IPropsId {
  id: string;
}
export interface ISchool {
  duration: string;
  schoolName: string;
  subHeader: string;
  logo?: string;
  desc: string;
}

export interface Experience {
  duration: string;
  typeOfWork?: string;
  role: string;
  desc: string;
  logo?: string;
}

export interface IHamburgerMenu {
  isOpen: boolean;
  className?: string;
  onClick?: () => void;
}

export interface IHeaderItem {
  id: string;
  name: string;
}

export interface IHeader {
  items: IHeaderItem[];
}

export interface ISkill {
  knowledgeLevel: KnowledgeLevel | number;
  className?: string;
}

export type ITool =
  | "dart"
  | "typescript"
  | "javascript"
  | "java"
  | "kotlin"
  | "python"
  | "go"
  | "rust"
  | "c"
  | "cpp"
  | "csharp"
  | "erlang"
  | "ocaml"
  | "swift"
  | "scala"
  | "nodejs"
  | "spring"
  | "ktor"
  | "flutter"
  | "react"
  | "graphql"
  | "grpc"
  | "rest"
  | "nginx"
  | "kubernetes"
  | "docker"
  | "gcloud"
  | "render"
  | "ovh"
  | "aruba"
  | "netlify"
  | "unity"
  | "opengl"
  | "vulkan"
  | "unreal"
  | "strapi"
  | "mysql"
  | "postgresql"
  | "mongodb"
  | "scala"
  | "php"
  | "electron"
  | "vscode"
  | "intellij"
  | "androidstudio"
  | "xcode"
  | "angular";

export type TSocialMedia =
  | "facebook"
  | "github"
  | "linkedin"
  | "gmail"
  | "upwork";
export interface ISocialMedia {
  socialMedia: TSocialMedia;
  url: string;
}

export interface IKnowledgeCard {
  knowledgeLevel: KnowledgeLevel;
  tool: ITool;
}

export interface ICardList {
  duration: string;
  logo?: string;
  title: string;
  subtitle?: string;
  content?: string;
}
