import dart from "../assets/images/dart.png";
import typescript from "../assets/images/typescript.png";
import javascript from "../assets/images/javascript.png";
import java from "../assets/images/java.png";
import kotlin from "../assets/images/kotlin.png";
import python from "../assets/images/python.png";
import go from "../assets/images/go.png";
import rust from "../assets/images/rust.png";
import c from "../assets/images/c.png";
import cpp from "../assets/images/cpp.png";
import csharp from "../assets/images/csharp.png";
import erlang from "../assets/images/erlang.png";
import ocaml from "../assets/images/ocaml.png";
import swift from "../assets/images/swift.png";
import nodejs from "../assets/images/nodejs.png";
import spring from "../assets/images/spring.png";
import ktor from "../assets/images/ktor.png";
import flutter from "../assets/images/flutter.png";
import react from "../assets/images/react.png";
import graphql from "../assets/images/graphql.png";
import grpc from "../assets/images/grpc.png";
import rest from "../assets/images/rest.png";
import nginx from "../assets/images/nginx.png";
import kubernetes from "../assets/images/kubernetes.png";
import docker from "../assets/images/docker.png";
import gcloud from "../assets/images/gcloud.png";
import render from "../assets/images/render.png";
import ovh from "../assets/images/ovh.png";
import aruba from "../assets/images/aruba.png";
import netlify from "../assets/images/netlify.png";
import unity from "../assets/images/unity.png";
import opengl from "../assets/images/opengl.png";
import vulkan from "../assets/images/vulkan.png";
import unreal from "../assets/images/unreal.png";
import strapi from "../assets/images/strapi.png";
import mysql from "../assets/images/mysql.png";
import postgresql from "../assets/images/postgresql.png";
import mongodb from "../assets/images/mongodb.png";
import scala from "../assets/images/scala.png";
import php from "../assets/images/php.png";
import electron from "../assets/images/electron.png";
import vscode from "../assets/images/vscode.png";
import intellij from "../assets/images/intellij.png";
import androidstudio from "../assets/images/androidstudio.png";
import xcode from "../assets/images/xcode.png";
import { ITool } from "../types.d";

export function getInfo(tool: ITool | string): {
  img: string;
  name: string;
  url?: string;
} {
  switch (tool) {
    case "graphql":
      return {
        img: graphql,
        name: "GraphQL",
      };
    case "grpc":
      return {
        img: grpc,
        name: "gRPC",
      };
    case "rest":
      return {
        img: rest,
        name: "REST",
      };
    case "nginx":
      return {
        img: nginx,
        name: "NginX",
      };
    case "kubernetes":
      return {
        img: kubernetes,
        name: "Kubernetes",
      };
    case "docker":
      return {
        img: docker,
        name: "Docker",
      };
    case "gcloud":
      return {
        img: gcloud,
        name: "Google Cloud Platform",
      };
    case "render":
      return {
        img: render,
        name: "Render",
      };
    case "ovh":
      return {
        img: ovh,
        name: "OVHcloud",
      };
    case "aruba":
      return {
        img: aruba,
        name: "Aruba.it",
      };
    case "netlify":
      return {
        img: netlify,
        name: "Netlify",
      };
    case "unity":
      return {
        img: unity,
        name: "Unity",
      };
    case "opengl":
      return {
        img: opengl,
        name: "OpenGL",
      };
    case "vulkan":
      return {
        img: vulkan,
        name: "Vulkan",
      };
    case "unreal":
      return {
        img: unreal,
        name: "Unreal",
      };
    case "strapi":
      return {
        img: strapi,
        name: "Strapi",
      };
    case "mysql":
      return {
        img: mysql,
        name: "MySQL",
      };
    case "postgresql":
      return {
        img: postgresql,
        name: "PostgreSQL",
      };
    case "mongodb":
      return {
        img: mongodb,
        name: "MongoDB",
      };
    case "dart":
      return {
        img: dart,
        name: "Dart",
      };
    case "typescript":
      return {
        img: typescript,
        name: "Typescript",
      };
    case "javascript":
      return {
        img: javascript,
        name: "Javascript",
      };
    case "java":
      return {
        img: java,
        name: "Java",
      };
    case "kotlin":
      return {
        img: kotlin,
        name: "Kotlin",
      };
    case "python":
      return {
        img: python,
        name: "Python",
      };
    case "go":
      return {
        img: go,
        name: "Go",
      };
    case "rust":
      return {
        img: rust,
        name: "Rust",
      };
    case "c":
      return {
        img: c,
        name: "C",
      };
    case "cpp":
      return {
        img: cpp,
        name: "C++",
      };
    case "csharp":
      return {
        img: csharp,
        name: "C#",
      };
    case "erlang":
      return {
        img: erlang,
        name: "Erlang",
      };
    case "ocaml":
      return {
        img: ocaml,
        name: "OCaml",
      };
    case "swift":
      return {
        img: swift,
        name: "Swift",
      };
    case "nodejs":
      return {
        img: nodejs,
        name: "NodeJS",
      };
    case "spring":
      return {
        img: spring,
        name: "Spring Framework",
      };
    case "ktor":
      return {
        img: ktor,
        name: "Ktor",
      };
    case "flutter":
      return {
        img: flutter,
        name: "Flutter",
      };
    case "react":
      return {
        img: react,
        name: "React",
      };
    case "scala":
      return {
        img: scala,
        name: "Scala",
      };
    case "php":
      return {
        img: php,
        name: "PHP",
      };
    case "electron":
      return {
        img: electron,
        name: "Electron",
      };
    case "vscode":
      return {
        img: vscode,
        name: "Visual Studio Code",
      };
    case "intellij":
      return {
        img: intellij,
        name: "Intellij Idea",
      };
    case "androidstudio":
      return {
        img: androidstudio,
        name: "Android Studio",
      };
    case "xcode":
      return {
        img: xcode,
        name: "Xcode",
      };
    default:
      return {
        img: "",
        name: "",
      };
  }
}
