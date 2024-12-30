import fs from "fs";
import path from "path";
import _map from "lodash/map";

const IMAGE_PATH = "public/img/monsters";

export const getRandomImage = () => {
  const monstersDir = path.join(process.cwd(), IMAGE_PATH);
  const files = _map(fs.readdirSync(monstersDir), (file) => {
    return `/img/monsters/${file}`;
  });

  return files;
}
