class UserController {
  constructor(model) {
    this.model = model;
  }

  getAll = async (req, res) => {
    try {
      const usersData = await this.model.findAll();
      res.json(usersData);
    } catch (e) {
      if (e) {
        console.log(e);
      }
    }
  };
}

module.exports = UserController;
