import Aluno from '../models/Aluno';

class HomeController {
  async store(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Tiago',
      sobrenome: 'Cussate',
      email: 'tiago@email.com',
      idade: 31,
      peso: 97,
      altura: 1.8,
    });
    return res.status(200).json(novoAluno);
  }
}

export default new HomeController();
