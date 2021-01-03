class ContactController {
  index(req, res) {
    // listar todos os registros
    res.send('send from contact controller');
  }

  show() {
    // obter um registro
  }

  store() {
    // criar um registro
  }

  update() {
    // editar um registro
  }

  delete() {
    // deletar um registro
  }
}

// design pattern: Singleton
module.exports = new ContactController(); // importando uma instância da classe
