import express from 'express';
import { createEmpleado, getEmpleados, updateEmpleado, deleteEmpleado } from '../controllers/empleados.controller.js'; 

const router = express.Router();

// Definir las rutas CRUD para empleados
router.post('/', createEmpleado);          
router.get('/', getEmpleados);              
router.put('/:id', updateEmpleado);         
router.delete('/:id', deleteEmpleado);      

// Exporta el router como exportación por defecto
export default router;
