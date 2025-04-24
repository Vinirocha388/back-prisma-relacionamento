import express from "express";
import CollectionController from "../controllers/collectionController.js";

const collectionRouter = express.Router();

collectionRouter.get("/", CollectionController.getAllCollections);
collectionRouter.post("/", CollectionController.createCollection);
collectionRouter.get("/:id", CollectionController.getCollectionById);
collectionRouter.put("/:id", CollectionController.updateCollection);
collectionRouter.delete("/:id", CollectionController.deleteCollection);

export default collectionRouter;