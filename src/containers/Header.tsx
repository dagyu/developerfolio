import { useState } from "react";
import Headroom from "react-headroom";
import { HamburgerMenu } from "../components/HamburgerMenu";
import { IHeader } from "../types.d";
import { onTop } from "./Top";

export function Header(props: IHeader) {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div className="menu-mobile w-100 d-flex flex-column justify-content-around align-items-center fs-1">
          {props.items.map((e, i) => (
            <a
              key={i}
              className="text-uppercase text-dark"
              href={`#${e.id}`}
              style={{ textDecoration: "none" }}
              onClick={() => setOpen(false)}
            >
              {e.name}
            </a>
          ))}
        </div>
      )}
      <Headroom>
        <header className="container-lg pt-3 bg-light">
          <div className="d-flex justify-content-between align-items-center">
            <code onClick={onTop} style={{ cursor: "pointer" }}>
              {"<dagyu/>"}
            </code>
            <div
              className="w-100 d-flex justify-content-end"
              style={{ marginLeft: "20%" }}
            >
              <HamburgerMenu
                className="d-flex d-lg-none d-md-none d-sm-none"
                onClick={() => {
                  if (!isOpen) onTop();
                  setOpen(!isOpen);
                }}
                isOpen={isOpen}
              />
              <div className="d-none d-sm-flex w-100 justify-content-between">
                {props.items.map((e, i) => (
                  <a
                    key={i}
                    className="text-uppercase text-dark"
                    href={`#${e.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    {e.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </header>
      </Headroom>
    </>
  );
}
