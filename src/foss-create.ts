import { CommanderStatic } from "commander";
import { createFossInfo } from "./actions/foss-create-action";

export function registerCreateAction(commander: CommanderStatic) {
  const command = commander.command("create");

  command
    .description("Generate a foss file in csv format")
    .option(
      "-o --output [output]",
      "path to output file",
      "build/reports/foss.csv"
    )
    .action(async (args: any) => {
      await createFossInfo(command.output);
    });
}
