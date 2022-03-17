class HomeController {
  async index(req, res) {
    return res.status(200).json('Index');
  }
}

export default new HomeController();
