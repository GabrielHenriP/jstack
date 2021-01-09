const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(reqquest, response) {
    // listar todos os registros
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
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
