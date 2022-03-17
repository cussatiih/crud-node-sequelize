import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const users = await User.findAll();

      if (!users) {
        return res.status(200).json({
          errors: ['Nenhum usuario encontrado'],
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
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(200).json({
          errors: ['Nenhum usuario encontrado'],
        });
      }

      return res.status(200).json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(200).json({
          errors: ['Nenhum usuario encontrado'],
        });
      }

      const updatedUser = await user.update(req.body);

      return res.status(200).json(updatedUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ['ID não enviado'],
        });
      }
      const user = await User.findByPk(id);

      if (!user) {
        return res.status(200).json({
          errors: ['Nenhum usuario encontrado'],
        });
      }

      await user.destroy();

      return res.status(200).json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async store(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.status(200).json(novoUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
