"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const enviroment_1 = require("../common/enviroment");
const users_router_1 = require("../users/users.router");
class Server {
    initServer() {
        return new Promise((resolve, reject) => {
            try {
                this.application = restify.createServer({
                    version: "1.0.0",
                    name: "meat-api"
                });
                this.application.use(restify.plugins.queryParser());
                this.application.listen(enviroment_1.enviroment.server.port, () => {
                    resolve(this.application);
                });
            }
            catch (error) {
                reject(error);
            }
        });
    }
    initRoutes() {
        const routes = [users_router_1.usersRouter];
        return Promise.resolve(routes.forEach(router => router.applyRoutes(this.application)));
    }
    bootstrap() {
        return this.initServer().then(() => {
            return this.initRoutes().then(() => this);
        });
    }
}
exports.Server = Server;
