import CardModel from "../models/cardModel.js";


class CardController {
  async getAllCards (req, res) {
    try {
      const cards = await CardModel.findAll();
      res.json(cards);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar as cards" });
    }
  };

  createCard = async (req, res) => {
    const { name,rarity,attackPoints, defensePoints, imageUrl,collectionId} = req.body;
    
    
    try {
      if (!name || !rarity || !attackPoints || !defensePoints || !collectionId) {
        return res.status(400).json({ erro: "Campos obrigatórios não definidos" });
      }
      const newCard = await CardModel.create(name,rarity,attackPoints, defensePoints, imageUrl,collectionId);
      res.status(201).json({message: "Carta criada com sucesso", newCard});
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar carta" });
    }
  };

 

  getCardById = async (req, res) => {
    const { id } = req.params;
    try {
      const carta = await CardModel.findById(Number(id));
      if (!carta) return res.status(404).json({ erro: "Carta não encontrada" });
      res.json(carta);
    } catch (error) {
      console.error("Erro ao buscar carta:", error);
      res.status(500).json({ erro: "Erro ao buscar carta!" });
    }
  };

  searchByTerm = async (req, res) => {
    const { term } = req.query;
    try {
      const carta = await CardModel.searchByTerm(term);
      res.json(carta);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar carta" });
    }
  };

  

  updateCard = async (req, res) => {
    const { id } = req.params; 
    const {name,rarity,attackPoints, defensePoints, imageUrl,collectionId } = req.body; 
  
    try {
      const cartaAtualizada = await CardModel.update(Number(id),name,rarity,attackPoints, defensePoints, imageUrl,collectionId);
      if (!cartaAtualizada) {
        return res.status(404).json({ erro: "Carta não encontrada" });
      }
      res.json({message:"Carta atualizada com sucesso", cartaAtualizada}); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar carta" });
    }
  };

  deleteCard = async (req, res) => {
    const { id } = req.params;
    try {
      await cardModel.delete(Number(id));
      res.status(200).json({ mensagem: "Carta deletada com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao deletar carta" });
    }
  };
}

export default new CardController();