import express from "express";
import cors from "cors";
import collectionRoutes from "./routes/collectionRoutes.js";
import cardsRoutes from "./routes/cardsRoutes.js";
import authRoutes from "./routes/auth.routes.js"; // importar as rotas de autenticação
const app = express();
app.use(cors());
const port = process.env.PORT || 4001;
app.use(express.json());
app.use("/colecoes", collectionRoutes);
app.use("/cards", cardsRoutes);
app.use("/auth", authRoutes);// usar as rotas de autenticação
app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});