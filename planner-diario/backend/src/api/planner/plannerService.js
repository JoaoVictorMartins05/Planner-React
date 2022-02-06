const Planner = require("./planner");

Planner.methods(["get", "post", "put", "delete"]);
Planner.updateOptions({ new: true, runValidators: true });

module.exports = Planner;
