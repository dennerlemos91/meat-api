"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = require("../common/router");
class UserRouter extends router_1.Router {
    applyRoutes(application) {
        application.get("/users", (req, res, next) => {
            res.json({ message: "ok" });
            next();
        });
    }
}
exports.usersRouter = new UserRouter();
