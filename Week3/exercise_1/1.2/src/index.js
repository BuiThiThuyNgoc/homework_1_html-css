import * as React from "react";
import * as ReactDom from "react-dom";
import MyButton from "./MyButton";
import MyList from "./MyList";

const root = ReactDom.createRoot(document.getElementById("root"));

const appState = {
  text: "My Button",
  disabled: true,
  items: ["First", "Second", "Third"],
};

function render(props) {
  root.render (
    <main>
      <MyButton text={props.text} disabled={props.disabled} />
      <MyList items={props.items} />
    </main>
  );

}

render(appState);

setTimeout(() => {
  appState.disabled = false;
  appState.items.push("Forth");

  render(appState);
}, 10000);