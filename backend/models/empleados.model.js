import mongoose from 'mongoose';

const empleadoSchema = new mongoose.Schema({
  codigo: { type: Number, required: true, unique: true },
  nombre: { type: String, required: true },
  apellido1: { type: String, required: true },
  apellido2: { type: String, required: true },
  codigo_departamento: { type: Number, required: true }
});

const Empleado = mongoose.models.Empleado || mongoose.model('Empleado', empleadoSchema);

export default Empleado;
