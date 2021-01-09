class ContactController {
  index(req, res) {
    // listar todos os registros
    res.send('send from contact controller');
  }

  show() {
    // mostrar um registro
  }

  store() {
    // Criar um novo registro
  }

  update() {
    // editar um registro
  }

  delet() {
    // deletar um registro
  }
}

// Singleton
module.exports = new ContactController();
