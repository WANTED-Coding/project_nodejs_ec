module.exports = {
  apps: [
    {
      name: "EC-21",
      script: "./dist/app/index.ts",
      args: "./app/index.ts",
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
      wait_ready: true,
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      log_file: "./logs/combined.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss:SSSS",
      min_uptime: 10000,
      max_restarts: 3,
    },
  ],
};
