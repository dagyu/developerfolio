import { ITool } from "../types.d";
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

function getImg(tool: ITool) {
  switch (tool) {
    case "graphql":
      return graphql;
    case "grpc":
      return grpc;
    case "rest":
      return rest;
    case "nginx":
      return nginx;
    case "kubernetes":
      return kubernetes;
    case "docker":
      return docker;
    case "gcloud":
      return gcloud;
    case "render":
      return render;
    case "ovh":
      return ovh;
    case "aruba":
      return aruba;
    case "netlify":
      return netlify;
    case "unity":
      return unity;
    case "opengl":
      return opengl;
    case "vulkan":
      return vulkan;
    case "unreal":
      return unreal;
    case "strapi":
      return strapi;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "mongodb":
      return mongodb;
    case "dart":
      return dart;
    case "typescript":
      return typescript;
    case "javascript":
      return javascript;
    case "java":
      return java;
    case "kotlin":
      return kotlin;
    case "python":
      return python;
    case "go":
      return go;
    case "rust":
      return rust;
    case "c":
      return c;
    case "cpp":
      return cpp;
    case "csharp":
      return csharp;
    case "erlang":
      return erlang;
    case "ocaml":
      return ocaml;
    case "swift":
      return swift;
    case "nodejs":
      return nodejs;
    case "spring":
      return spring;
    case "ktor":
      return ktor;
    case "flutter":
      return flutter;
    case "react":
      return react;
    case "scala":
      return scala;
    case "php":
      return php;
    case "electron":
      return electron;
    case "vscode":
      return vscode;
    case "intellij":
      return intellij;
    case "androidstudio":
      return androidstudio;
    case "xcode":
      return xcode;
  }
}

export function Tools(props: { tool: ITool }) {
  return <img src={getImg(props.tool)} alt="" style={{ width: "32px" }} />;
}
