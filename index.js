// recursevely rename all files in the current directory from .js or .jsx to .ts or .tsx

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

const renameFiles = (dir) => {
  if (!fs.existsSync(dir) || dir === __dirname + "/node_modules") {
    return;
  }
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      renameFiles(filePath);
    } else {
      if (file.includes("index.js")) {
        return;
      }
      if (file.endsWith(".js") || file.endsWith(".jsx")) {
        const newFilePath = file.endsWith(".js")
          ? filePath.replace(".js", ".ts")
          : filePath.replace(".jsx", ".tsx");
        fs.renameSync(filePath, newFilePath);
      }
    }
  });
};

renameFiles(__dirname);
