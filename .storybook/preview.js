import React from "react";
import { GlobalStyles } from "../src/react/theme/index";
import WebFont from "webfontloader";

WebFont.load({ google: { families: ["Roboto:300,400,500"] } });

export const decorators = [
  (Story) => (
    <div>
      <GlobalStyles />
      <Story />
    </div>
  ),
];
