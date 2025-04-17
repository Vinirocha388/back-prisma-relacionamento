import express from "express";
import cors from "cors";
import collectionRoutes from "./routes/collectionRoutes.js";
const app = express();
app.use(cors());
const port = 3000;
app.use(express.json());
app.use("/colecoes", collectionRoutes);
app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
});