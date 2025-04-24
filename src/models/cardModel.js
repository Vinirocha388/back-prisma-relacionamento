import prisma from "../../prisma/client.js";

class cardModel {
  // Obter todas as cartas
  async findAll() {
    const cards = await prisma.card.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        collection: {
          select: {
            id: true,
            name: true,
            description: true,
            releaseYear: true,
          },
        },
      },
    });


    return cards;
  }

  // Obter um personagem pelo ID
  async findById(id) {
    const card = await prisma.card.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        collection: {
          select: {
            id: true,
            name: true,
            description: true,
            releaseYear: true,
          },
        },
      }
    });

    return card;
  }

  // Criar uma nova carta
  async create(
    name,
    rarity,
    attackPoints,
    defensePoints,
    imageUrl,
    collectionId
  ) {
    const newCard = await prisma.card.create({
      data: {
        name,
        rarity,
        attackPoints,
        defensePoints,
        imageUrl,
        collectionId: Number(collectionId),
      },
    });

    return newCard;
  }

  // Atualizar uma carta
  async update(
    id,
    name,
    rarity,
    attackPoints,
    defensePoints,
    imageUrl,
    collectionId
  ) {
    const card = await this.findById(id);

    if (!card) {
      return null;
    }


    const cardUpdated = await prisma.card.update({
      where: {
        id: Number(id),
      },
      data:{
        name,
        rarity,
        attackPoints,
        defensePoints,
        imageUrl,
        collectionId: Number(collectionId)
      }
    });

    return cardUpdated;
  }

  // Remover uma carta
  async delete(id) {
    const card = await this.findById(id);

    if (!card) {
      return null;
    }

    await prisma.card.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new cardModel();