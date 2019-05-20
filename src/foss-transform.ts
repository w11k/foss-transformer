import { CommanderStatic } from "commander";
import { processTransformFromInputFile } from "./actions/foss-transform-action";

export function registerTransformAction(commander: CommanderStatic) {
  const command = commander.command("transform");

  command
    .description(`Transforms the licence checker json file into a csv file`)
    .option("-i --input <input>", `input file path`)
    .option("-o --output <output>", `output file path`)
    .action(async (args: any) => {
      if (command.input === undefined) {
        console.error("No input path");
        process.exit(-1);
      }
      if (command.output === undefined) {
        console.error("No output path");
        process.exit(-1);
      }

      await processTransformFromInputFile(command.input, command.output);
    });
}
