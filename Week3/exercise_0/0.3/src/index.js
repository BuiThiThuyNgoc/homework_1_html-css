import * as React from "react";
import * as ReactDom from "react-dom";

import MySection from "./MySection";
import MyButton from "./MyButton";

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <MySection>
    <MyButton>My Button Text</MyButton>
  </MySection>
);