import type { NextConfig } from "next";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: {
    unoptimized: true
  },
  basePath: "",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    implementation: 'sass-embedded',
  },
};

export default nextConfig;
