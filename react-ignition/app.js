import React from "react";
import React from "react-dom/client";

// const head = <h1>Hello Anurag</h1>;
const Title = () => <h1>component Composition</h1>;
const HeadingComponent = () => (
  <div>
    <Title />
    <h1>Hello Anurag</h1>
  </div>
);
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
