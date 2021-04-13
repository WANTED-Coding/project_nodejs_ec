module.exports = {
  apps: [
    {
      name: "EC-21",
      script: "./app/index.ts",
      node_args: ["ts-node-dev", "--poll"],
      autorestart: true,
      instances: 1,
      exec_interpreter: "node",
      exec_mode: "cluster",
      env: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};
