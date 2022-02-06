const express = require("express");

module.exports = function (server) {
  const router = express.Router();
  server.use("/api", router);

  const plannerService = require("../api/planner/plannerService");
  plannerService.register(router, "/planner");
};
