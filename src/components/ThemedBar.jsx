import React from "react";

import ThemeContext from "./../theme-context";
const ThemedBar = () => {
  return (
    <ThemeContext.Consumer>
      {theme => {
        console.log(theme);
      }}
    </ThemeContext.Consumer>
  );
};
export default ThemedBar;
