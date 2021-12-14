declare const ebg;
declare const $;

// @ts-ignore
import dojo from "dojo";
// @ts-ignore
import declare from "dojo/_base/declare";
// @ts-ignore
import "ebg/core/gamegui";
// @ts-ignore
import "ebg/counter";

import { ForbiddenDesert } from "./js/index";

// @ts-ignore
export const index = declare(
  // @ts-ignore
  "bgagame.forbiddendesert",
  ebg.core.gamegui,
  ForbiddenDesert
)(dojo, declare);
