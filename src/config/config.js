const config = {
  jwtSecret: "YOUR_secret_key",
  apollo_port: process.env.PORT || "http://localhost:4000",
  env: process.env.env || "development",
};

export default config;
