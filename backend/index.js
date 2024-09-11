import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import empleadosRoutes from './routes/empleados.routes.js';
import departamentosRoutes from './routes/departamentos.routes.js';

const uri = "mongodb+srv://robinsonariza2001:ebvhpZudZlQwnNvB@cluster0.wmfa7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();
app.use(cors());
app.use(express.json()); 

// Conexión a MongoDB
mongoose.connect(uri, {
})
.then(() => console.log('Conectado a MongoDB'))
.catch(err => console.error('Error al conectar a MongoDB:', err));

// Rutas
app.use('/api/empleados', empleadosRoutes);
app.use('/api/departamentos', departamentosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
