// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

//for developments phase
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "adem_db",
        mongodb_password: "3ZHzCuOp8A8QCcaa",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-blog-dev",
      },
    };
  }

  //for deployment pahase
  return {
    env: {
      mongodb_username: "adem_db",
      mongodb_password: "3ZHzCuOp8A8QCcaa",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-blog",
    },
  };
};
