const ContactsRepository = require('../repositories/ContactRepository');

class ContactController {
  index(request, response) {
    // Listar todos os contatos

    response.send('Send from ContactController');
  }

  show() {
    // Obter um único registro
  }

  store() {
    // Criar um novo registro
  }

  update() {
    // Atualizar um registro
  }

  delete() {
    // Deletar um registro
  }
}

// Singleton
module.exports = new ContactController();
