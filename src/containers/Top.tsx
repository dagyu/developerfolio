import { useContext } from "react";
import { ScrollContext } from "./App";

export function onTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export function Top() {
  const isScrolled = useContext(ScrollContext);

  return (
    <button
      onClick={onTop}
      id="topButton"
      title="Go to top"
      className={`rounded-circle shadow bg-primary text-white ${
        isScrolled ? "d-block" : "d-none"
      }`}
    >
      <i className="fas fa-chevron-up p-2"></i>
    </button>
  );
}
