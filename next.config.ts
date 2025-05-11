const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  assetPrefix: isProd ? "/marcin_dolatowski_web_wroclaw/" : "",
  basePath: isProd ? "/marcin_dolatowski_web_wroclaw" : "",
  output: "export",
};

export default nextConfig;
