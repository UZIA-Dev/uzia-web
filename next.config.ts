import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "",
  sassOptions: {
    implementation: 'sass-embedded',
  },
};

export default nextConfig;
