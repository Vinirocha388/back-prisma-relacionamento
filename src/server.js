import express from "express";
import cors from "cors";
import collectionRoutes from "./routes/collectionRoutes.js";
import cardsRoutes from "./routes/cardsRoutes.js";
const app = express();
app.use(cors());
const port = process.env.PORT || 4001;
app.use(express.json());
app.use("/colecoes", collectionRoutes);
app.use("/cards", cardsRoutes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});