import prisma from "../../prisma/client.js";

class CollectionModel {
  // Obter todas as coleções
  async findAll() {
    const colecoes = await prisma.collection.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        cards: true,
      },
    });


    return colecoes;
  }

  // Obter um personagem pelo ID
  async findById(id) {
    const colecao = await prisma.collection.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        cards: true,
      }
    });

    return colecao;
  }

  // Criar uma nova coleção
  async create(
    name,
    description,
    releaseYear,
  ) {
    const newCollection = await prisma.collection.create({
      data: {
        name,
        description,
        releaseYear,
      },
    });

    return newCollection;
  }

  // Atualizar uma coleção
  async update(
    id,
    name,
    description,
    releaseYear
  ) {
    const collection = await this.findById(id);

    if (!collection) {
      return null;
    }

    // Atualize a coleção existente com os novos dados
    if (name !== undefined) {
      name = name;
    }
    if (description !== undefined) {
      description = description;
    }
    if (releaseYear !== undefined) {
      releaseYear = releaseYear;
    }

    const collectionUpdated = await prisma.collection.update({
      where: {
        id: Number(id),
      },
      data:{
        name,
        description,
        releaseYear,
      }
    });

    return collectionUpdated;
  }

  // Remover um personagem
  async delete(id) {
    const personagem = await this.findById(id);

    if (!personagem) {
      return null;
    }

    await prisma.personagem.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new CollectionModel();