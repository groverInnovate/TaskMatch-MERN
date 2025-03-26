import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import taskRoutes from './routes/taskRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js'; 

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5003;
const mongoURI = process.env.MONGO_URI || "your-mongodb-uri";


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigins = [
  'https://taskmatch-front.vercel.app',    
  'http://localhost:3000',
   'https://taskmatch-front.vercel.app/api'          
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));


app.get('/', (req, res) => {
  console.log('✅ Base route hit');
  res.send('Server is working!');
});


app.use('/api/auth', authRoutes);   
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);  


mongoose.connect(mongoURI)
  .then(() => console.log(" MongoDB Connected Successfully!"))
  .catch((err) => console.error(" MongoDB connection error:", err));


app.use(errorHandler);  

app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

