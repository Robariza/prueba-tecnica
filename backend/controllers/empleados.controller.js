import Empleado from '../models/empleados.model.js'

// Crear un nuevo empleado
export const createEmpleado = async (req, res) => {
    try {
      const nuevoEmpleado = new Empleado(req.body);
      await nuevoEmpleado.save();
      res.status(201).json(nuevoEmpleado);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Obtener todos los empleados
  export const getEmpleados = async (req, res) => {
    try {
      const empleados = await Empleado.find();
      res.status(200).json(empleados);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Actualizar un empleado
  export const updateEmpleado = async (req, res) => {
    try {
      const { id } = req.params;
      const empleadoActualizado = await Empleado.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json(empleadoActualizado);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Eliminar un empleado
  export const deleteEmpleado = async (req, res) => {
    try {
      const { id } = req.params;
      await Empleado.findByIdAndDelete(id);
      res.status(200).json({ message: 'Empleado eliminado' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };