module.exports = {
  apps: [{
    name: "app",
    script: "./src/server.js",
    instance: "max",
    env: {
      NODE_ENV:"developer",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}