import sharp from "sharp";
import { readdir, unlink } from "node:fs/promises";
import path from "node:path";

const dir = path.join(process.cwd(), "public", "images");
const maxWidths = {
  "hero-coach-brussels.png": 2400,
  "cta-highway.png": 2400,
  "about-brussels.png": 1600,
};

const files = (await readdir(dir)).filter((f) => f.endsWith(".png"));

for (const file of files) {
  const inputPath = path.join(dir, file);
  const outputName = file.replace(/\.png$/, ".jpg");
  const outputPath = path.join(dir, outputName);
  const width = maxWidths[file] ?? 1400;

  await sharp(inputPath)
    .resize({ width, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(outputPath);

  await unlink(inputPath);
  console.log(`${file} -> ${outputName}`);
}
