const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", {}, "I am Child")
  )
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from Anurag"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
