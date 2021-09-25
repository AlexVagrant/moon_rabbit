module.exports = {
  apps: [{
    name: "moon_rabbit_server",
    // 解析器路径 默认为 node
    interpreter: "./node_modules/.bin/ts-node", 
    interpreter_args: "-r tsconfig-paths/register",
    script: "./app.ts",
    //script: "./node_modules/.bin/ts-node",
    //args: "-T -r tsconfig-paths/register ./app.ts",
    watch: true,
    watch_delay: 1000,
    ignore_watch: [
      "node_modules",
      "packages.json",
      "README.md"
    ],
    env: {
      NODE_ENV: "development",
    },
    env_production: {
      NODE_ENV: "production",
    }
  }]
}


