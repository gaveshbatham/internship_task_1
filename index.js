import express from 'express'; 
import cors from 'cors';
import dotenv from 'dotenv';
import sequelize from './db.js';
import userRouter from './router/user.route.js';
import nicheRouter from './router/niche.route.js';
import groupRouter from './router/group.route.js';
import platformRoute from './router/platform.route.js';
import campaignsRoutes from './router/campaigns.route.js';

dotenv.config();
const PORT = process.env.BACKEND_PORT || 5000; // Default to 5000 if not set

const app = express();

// Middleware
app.use(cors());
// app.use(express.json());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/user', userRouter);
app.use('/niche', nicheRouter);
app.use('/group', groupRouter);
app.use('/platform', platformRoute);
app.use('/campaigns' ,campaignsRoutes)

app.get('/', (req, res) => { 
    res.send('Server is running successfully!');
});





// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});
