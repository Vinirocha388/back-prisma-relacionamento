import express from 'express';
//importar rotas
import authRouter from './auth.routes.js';
import collectionRouter from './collectionRoutes.js';
import cardsRouter from './cardsRoutes.js';

import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

//rotas publicas
router.use("/auth", authRouter);
router.use("/collection", collectionRouter);
router.use("/cards", cardsRouter);

//rotas privadas
router.use(authMiddleware); // Middleware de autenticação para rotas privadas


export default router;
