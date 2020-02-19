import * as restify from "restify";

import { Router } from "../common/router";

class UserRouter extends Router {
  applyRoutes(application: restify.Server) {
    application.get(
      "/users",
      (req: restify.Request, res: restify.Response, next) => {
        res.json({ message: "ok" });
        next();
      }
    );
  }
}

export const usersRouter = new UserRouter();
