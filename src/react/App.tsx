import React, { useState } from "react";
import { GlobalStyles } from "./theme";
import WebFont from "webfontloader";

WebFont.load({ google: { families: ["Roboto:300,400,500"] } });

export const App = () => {
  return (
    <div>
      <GlobalStyles />
    </div>
  );
};
