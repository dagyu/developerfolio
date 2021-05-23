import { useEffect } from "react";

export function onTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

export function Top() {
  // When the user scrolls down 20px from the top of the document, show the button
  function scrollFunction() {
    let element = document.getElementById("topButton");
    if (!element) {
    } else if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      element.style.visibility = "visible";
    } else {
      element.style.visibility = "hidden";
    }
  }
  useEffect(() => {
    window.onscroll = function () {
      scrollFunction();
    };
    window.onload = function () {
      scrollFunction();
    };
  });
  return (
    <button
      onClick={onTop}
      id="topButton"
      title="Go to top"
      className="rounded-circle shadow bg-primary text-white"
    >
      <i className="fas fa-chevron-up p-2"></i>
    </button>
  );
}
