const express = require("express");
const app = express();

const db = require("./db/models/index");
const { users } = db;

const UserController = require("./controllers/UserController");
const UserRouter = require("./routers/UserRouter");

const userController = new UserController(users);
const userRouter = new UserRouter(userController, express);

app.use(cors("*"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  res.send("Hello world");
});

app.use("/users", userRouter.routes());

app.listen(8000, () => {
  console.log(`listening to port 8000`);
});
