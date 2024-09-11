import mongoose from 'mongoose';

const departamentoSchema = new mongoose.Schema({
  codigo: { type: Number, required: true, unique: true },
  nombre: { type: String, required: true }
});

const Departamento = mongoose.models.Departamento || mongoose.model('Departamento', departamentoSchema);

export default Departamento;
