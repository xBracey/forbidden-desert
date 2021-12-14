import React, { useState } from "react";
import { GlobalStyles } from "./theme";
import WebFont from "webfontloader";
import { Board } from "./components/Board";

WebFont.load({ google: { families: ["Roboto:300,400,500"] } });

export const App = () => {
  return (
    <div>
      <Board stormPosition={12} players={[]} />
      <GlobalStyles />
    </div>
  );
};
