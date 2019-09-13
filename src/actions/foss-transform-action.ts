import * as fs from "fs";
import * as path from "path";
import { ModuleInfos } from "license-checker";

const outputFileSync  = require("output-file-sync");

export async function processTransformFromInputFile(inputPath: string, output: string) {
  const inputAbsolutePath = path.join(process.cwd(), inputPath);
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

  const r = /@[0-9]+.[0-9]+.[0-9]+$/;

  const foo = [
    header.join(","),
    ...Object.entries(input).map(
      ([k, v]) =>
        `"${k.replace(r, "")}",${props
          .map(p => `"${(v as any)[p]}"`)
          .join(",")}`
    )
  ];
  outputFileSync(outputPath, foo.join("\n"), 'utf-8');
}
