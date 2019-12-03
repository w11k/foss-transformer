import * as path from "path";
import { ModuleInfos } from "license-checker";

const outputFileSync  = require("output-file-sync");

export async function processTransformFromInputFile(inputPath: string, output: string) {
  const a: ModuleInfos = require(inputPath);

  await processTransform(a, output);
}

export async function processTransform(input: ModuleInfos, output: string) {
  const outputPath = path.join(process.cwd(), output);
  
  const header = [
    "FOSS-Komponente",
    "Copyright",
    "Copyright-Inhaber",
    "Autorenhinweis (Wortlaut)"
  ];
  const props = ["licenses", "publisher", "repository"];

  const csvEntryPerPackage = [
    header.join(","),
    ...Object.entries(input).map(
      ([packageNameWithVersion, moduleInfo]) =>
        `"${packageNameWithVersion},${props
          .map(p => `"${(moduleInfo as any)[p]}"`)
          .join(',')}`,
    )
  ];
  outputFileSync(outputPath, csvEntryPerPackage.join("\n"), 'utf-8');
}
