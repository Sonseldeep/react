function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  children: "Click me to visit google",
};

const mainContainer = document.querySelectorAll("#root");
customRender(reactElement, mainContainer);
