"use strict";Object.defineProperty(exports, "__esModule", {value: true});class HomeController {
  async index(req, res) {
    return res.status(200).json('Index');
  }
}

exports. default = new HomeController();
