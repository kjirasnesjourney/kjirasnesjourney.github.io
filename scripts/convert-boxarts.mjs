import sharp from "sharp";
import { readdir, mkdir } from "fs/promises";
import { join, basename, extname } from "path";

const INPUT_DIR = "D:/Bag/Documentos/Projects/Kjira's SNES Journey/images/boxarts/Played Games";
const OUTPUT_DIR = "./src/assets/boxarts";

await mkdir(OUTPUT_DIR, { recursive: true });

const files = await readdir(INPUT_DIR);
const images = files.filter((f) => /\.(png|jpg|jpeg)$/i.test(f));

console.log(`Converting ${images.length} images to WebP...`);

for (const file of images) {
  const input = join(INPUT_DIR, file);
  const name = basename(file, extname(file));
  const output = join(OUTPUT_DIR, `${name}.webp`);

  await sharp(input)
    .resize({ width: 400, withoutEnlargement: true }) // cap width at 400px — enough for cards
    .webp({ quality: 82 })
    .toFile(output);

  console.log(`  ✓ ${file} → ${name}.webp`);
}

console.log("Done.");
