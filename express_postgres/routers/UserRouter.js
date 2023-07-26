class UserRouter {
  constructor(controller, express) {
    this.controller = controller;
    this.express = express;
  }

  routes() {
    const router = this.express.Router();

    router.get("/", this.controller.getAll);

    return router;
  }
}

module.exports = UserRouter;
