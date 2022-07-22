const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  async index(request, response) {
    const categories = await CategoriesRepository.findAll();

    response.json(categories);
  }

  async show(request, response) {
    const { id } = request.params;

    const categoryExists = await CategoriesRepository.findById(id);

    if (!categoryExists) {
      return response.status(400).json({ message: 'category not found' });
    }

    return response.json(categoryExists);
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'name is required' });
    }

    const category = await CategoriesRepository.create({ name });

    response.json(category);
  }

  async update(request, response) {
    const { id } = request.params;
    const { name } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'name is required' });
    }

    const categoryExists = await CategoriesRepository.findById(id);

    if (!categoryExists) {
      return response.status(400).json({ error: 'category does not exist' });
    }

    if (categoryExists.name === name) {
      return response.status(400).json({ error: 'name already exists' });
    }

    const updatedCategory = await CategoriesRepository.update(id, { name });

    return response.json(updatedCategory);
  }

  async delete(request, response) {
    const { id } = request.params;

    const categoryExists = await CategoriesRepository.findById(id);

    if (!categoryExists) {
      return response.status(400).json({ error: 'category does not exist' });
    }

    await CategoriesRepository.delete(id);

    response.sendStatus(204);
  }
}

module.exports = new CategoryController();
