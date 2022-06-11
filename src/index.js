import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <App />
  // React.createElement(
  //   "button",
  //   {
  //     onClick: () => console.log("CLICK"),
  //   },
  //   "Click me"
  // )
  // <div>
  //   Application is in progress
  //   <button>Click me!</button>
  // </div>
);
