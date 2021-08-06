export const config = {
  env: 'development',
  port: 3000,
  jwtSecret: process.env.JWT_SECRET || 'YOUR_secret_key',
};
