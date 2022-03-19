"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async index(req, res) {
    try {
      const users = await _User2.default.findAll({ attributes: ['id', 'nome', 'email'] });

      if (!users) {
        return res.status(200).json({
          errors: ['Nenhum usuario encontrado.'],
        });
      }

      return res.status(200).json(users);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await _User2.default.findByPk(id);

      if (!user) {
        return res.status(200).json({
          errors: ['Nenhum usuario encontrado.'],
        });
      }
      const { nome, email } = user;
      return res.status(200).json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const id = req.userId;

      const user = await _User2.default.findByPk(id);

      if (!user) {
        return res.status(200).json({
          errors: ['Nenhum usuario encontrado.'],
        });
      }

      const userAtualizado = await user.update(req.body);
      const { nome, email } = userAtualizado;

      return res.status(200).json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.userId;
      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado.'],
        });
      }
      const user = await _User2.default.findByPk(id);

      if (!user) {
        return res.status(200).json({
          errors: ['Nenhum usuario encontrado.'],
        });
      }

      await user.destroy();

      return res.status(200).json({
        apagado: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async store(req, res) {
    try {
      const novoUser = await _User2.default.create(req.body);
      const { id, nome, email } = novoUser;

      return res.status(200).json({ id, nome, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new UserController();
