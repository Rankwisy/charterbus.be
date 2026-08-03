import sharp from "sharp";
import { copyFile } from "node:fs/promises";
import path from "node:path";

const pub = path.join(process.cwd(), "public");
const appDir = path.join(process.cwd(), "src", "app");
const svgPath = path.join(pub, "logo.svg");

await sharp(svgPath).resize(512, 512).png().toFile(path.join(pub, "logo.png"));
await sharp(svgPath).resize(180, 180).png().toFile(path.join(appDir, "apple-icon.png"));
await copyFile(svgPath, path.join(appDir, "icon.svg"));

console.log("logo assets generated");
