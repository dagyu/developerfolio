import { Header } from "./Header";
import { Education } from "./Education";
import { Experiences } from "./Experiences";
import { Footer } from "./Footer";
import { Greeting } from "./Greeting";
import { Contacts } from "./Contacts";
import { Skills } from "./Skills";
import { Top } from "./Top";
import { useEffect, useState } from "react";
import React from "react";

const idContainers = [
  { name: "Skills", id: "skills" },
  { name: "Education", id: "education" },
  { name: "Experiences", id: "experiences" },
  { name: "Contacts", id: "contacts" },
];

export const ScrollContext = React.createContext<boolean>(false);

export function App() {
  const [scrollState, setScrollState] = useState(false);

  useEffect(() => {
    const scrollFunction = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setScrollState(true);
      } else {
        setScrollState(false);
      }
    };
    window.onscroll = scrollFunction;
    window.onload = scrollFunction;
  });

  return (
    <ScrollContext.Provider value={scrollState}>
      <main className="bg-light text-dark">
        <Header items={idContainers} />
        <Greeting />
        <div id="skills" children={<Skills />} />
        <div
          id="education"
          children={<Education />}
          style={{ marginTop: "10vh" }}
        />
        <div
          id="experiences"
          children={<Experiences />}
          style={{ marginTop: "10vh" }}
        />
        <div
          id="contacts"
          children={<Contacts />}
          style={{ marginTop: "10vh" }}
        />
        <Footer />
        <Top />
      </main>
    </ScrollContext.Provider>
  );
}
