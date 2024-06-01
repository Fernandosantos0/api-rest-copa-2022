import { Router } from 'express';

const router = Router();

// importando o controller
import SelecaoController from './app/controllers/SelecaoController.js';

// ROTAS
router.post('/', SelecaoController.store);
router.get('/', SelecaoController.index);
router.get('/:id', SelecaoController.show);
router.put('/:id', SelecaoController.update);
router.delete('/:id', SelecaoController.delete);

export default router;
