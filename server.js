import 'dotenv/config';

import express from 'express';
import dataRouter from './routes/pitch.router.js';

const app = express();
const PORT = process.env.PORT || 3000;

console.log(process.env.GROQ_API_KEY)

// JSON Deserializer Middleware
app.use(express.json());

// Subrouting Layer (Versioned Base)
app.use('/api/v1', dataRouter); 

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});