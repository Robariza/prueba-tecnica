import Departamento from '../models/departamentos.model.js'

// Crear un nuevo Departamento
export const createDepartamento = async (req, res) => {
    try {
      const nuevoDepartamento = new Departamento(req.body);
      await nuevoDepartamento.save();
      res.status(201).json(nuevoDepartamento);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Obtener todos los Departamentos
  export const getDepartamentos = async (req, res) => {
    try {
      const Departamentos = await Departamento.find();
      res.status(200).json(Departamentos);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
  // Actualizar un Departamento
  export const updateDepartamento = async (req, res) => {
    try {
      const { id } = req.params;
      const DepartamentoActualizado = await Departamento.findByIdAndUpdate(id, req.body, { new: true });
      res.status(200).json(DepartamentoActualizado);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Eliminar un Departamento
  export const deleteDepartamento = async (req, res) => {
    try {
      const { id } = req.params;
      await Departamento.findByIdAndDelete(id);
      res.status(200).json({ message: 'Departamento eliminado' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };