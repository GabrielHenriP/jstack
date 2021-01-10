const ContactsRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(reqquest, response) {
    // listar todos os registros
    const contacts = await ContactsRepository.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    // mostrar um registro
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404: not found
      return response.status(404).json({ error: 'User Not Found' });
    }

    response.json(contact);
  }

  store() {
    // Criar um novo registro
  }

  update() {
    // editar um registro
  }

  async delet(request, response) {
    // deletar um registro
    const { id } = request.params;
    const contact = await ContactsRepository.findById(id);

    if (!contact) {
      // 404: not found
      return response.status(404).json({ error: 'User Not Found' });
    }

    await ContactsRepository.delete(id);
    // 204: é o código 200 mas sem corpo
    response.sendStatus(204);
  }
}

// Singleton
module.exports = new ContactController();
