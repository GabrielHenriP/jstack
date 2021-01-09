const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Gabriel',
    email: 'g@g.com',
    phone: '232344444',
    category: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
