module.exports = {
  apps: [
    {
      name: "EC-21",
      script: "./index.ts",
      instances: 1,
      exec_interpreter: "node",
      exec_mode: "cluster",
      interpreter: "node",
      watch: true,
      env_qa: {
        PORT: 3001,
        NODE_ENV: 'production',
      },
      env_production: {
        PORT: 3000,
        NODE_ENV: 'production',
      },
      wait_ready: true,
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      log_file: "./logs/combined.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss:SSSS",
      min_uptime: 10000,
      max_restarts: 1,
    },
  ],
};