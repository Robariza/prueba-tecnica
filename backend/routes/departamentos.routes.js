import express from 'express';
import { createDepartamento, getDepartamentos, updateDepartamento, deleteDepartamento } from '../controllers/departamentos.controller.js';

const router = express.Router();

// Definir las rutas CRUD
router.post('/', createDepartamento);
router.get('/', getDepartamentos);
router.put('/:id', updateDepartamento);
router.delete('/:id', deleteDepartamento);

// Exporta el router
export default router;
