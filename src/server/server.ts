import * as restify from "restify";
import { enviroment } from "../common/enviroment";
import { Router } from "../common/router";

import { usersRouter } from "../users/users.router";

export class Server {
  application: restify.Server;

  initServer(): Promise<any> {
    return new Promise((resolve, reject) => {
      try {
        this.application = restify.createServer({
          version: "1.0.0",
          name: "meat-api"
        });

        this.application.use(restify.plugins.queryParser());

        this.application.listen(enviroment.server.port, () => {
          resolve(this.application);
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  initRoutes(): Promise<any> {
    const routes: Router[] = [usersRouter];
    return Promise.resolve(
      routes.forEach(router => router.applyRoutes(this.application))
    );
  }

  bootstrap(): Promise<Server> {
    return this.initServer().then(() => {
      return this.initRoutes().then(() => this);
    });
  }
}
