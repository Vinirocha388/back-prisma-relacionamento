import collectionModel from "../models/collectionModel.js";


class CollectionController {
  async getAllCollections (req, res) {
    try {
      const collections = await collectionModel.findAll();
      res.json(collections);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar as coleções" });
    }
  };

  createCollection = async (req, res) => {
    const { name, description, releaseYear } = req.body;
    
    
    try {
      if (!name || !releaseYear) {
        return res.status(400).json({ erro: "nome e ano de lançamento são obrigatórios" });
      }
      const newCollection = await collectionModel.create(name, description, releaseYear);
      res.status(201).json({message: "Coleção criada com sucesso", newCollection});
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar coleção" });
    }
  };

 

  getCollectionById = async (req, res) => {
    const { id } = req.params;
    try {
      const colecao = await collectionModel.findById(Number(id));
      if (!colecao) return res.status(404).json({ erro: "Coleção não encontrada" });
      res.json(colecao);
    } catch (error) {
      console.error("Erro ao buscar coleção:", error);
      res.status(500).json({ erro: "Erro ao buscar coleção!" });
    }
  };

  searchByTerm = async (req, res) => {
    const { term } = req.query;
    try {
      const collections = await collectionModel.searchByTerm(term);
      res.json(collections);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar collections" });
    }
  };

  

  updateCollection = async (req, res) => {
    const { id } = req.params; 
    const { name, description, releaseYear } = req.body; 
  
    try {
      const collectionAtualizada = await collectionModel.update(Number(id),name, description, releaseYear);
      if (!collectionAtualizada) {
        return res.status(404).json({ erro: "Collection não encontrada" });
      }
      res.json({message:"Coleção atualizada com sucesso", collectionAtualizada}); 
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar collection" });
    }
  };

  deleteCollection = async (req, res) => {
    const { id } = req.params;
    try {
      await collectionModel.delete(Number(id));
      res.status(200).json({ mensagem: "Collection deletada com sucesso" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao deletar collection" });
    }
  };
}

export default new CollectionController();