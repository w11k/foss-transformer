#!/usr/bin/env node

import { registerTransformAction } from "./foss-transform";
import { registerCreateAction } from "./foss-create";


var commander = require("commander");
var pkg = require("../package.json");

commander
  .description(
    `
  Creates a licence checker json file and transform it into a csv file.`
  )
  .version(pkg.version);

registerTransformAction(commander);
registerCreateAction(commander);

commander.parse(process.argv);
