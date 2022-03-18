class FotoController {
  async store(req, res) {
    return res.status(200).json(req.file);
  }
}

export default new FotoController();
