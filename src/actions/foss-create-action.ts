import * as checker from "license-checker";
import { processTransform } from "./foss-transform-action";

export async function createFossInfo(output: string) {
    const cwd = process.cwd();
  checker.init(
    {
      start: cwd,
      production: true,
      excludePrivatePackages: true
    },
    async (err, packages) => {
        if (err) {
            throw err;
        }
        
        await processTransform(packages, output);
    }
  );
}
