import express from 'express';
//import mongoose from 'mongoose';
import connectDB from './config/database';
import cors from 'cors';

const app = express();

// middleware
app.use(express.json());

// Allowed origins
let whitelist = ['http://localhost:3000'];
// CORS options
const corsOptions = {
    origin: function(origin: string | undefined, callback: (err: Error|null, allowed?: boolean) => void) {
        if (!origin || whitelist.indexOf(origin) !== -1) {
            // Allow the request from the allowed origin
            callback(null, true);
        } else {
            // Disable the request from other origins
            callback(new Error('Not allowed by CORS'));
        }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Allowed methods
    credentials: true, // Allow credentials (like cookies) if needed
    optionsSuccessStatus: 204 // For legacy browser support
}
app.use(cors(corsOptions));

app.listen(3000, () => {
    console.log('Server running on port 3000');
})

// mongoose.connect('mongodb://127.0.0.1:27017/mydb')
//     .then(() => {
//         console.log('Database connected');
//     })
//     .catch(err => {
//         console.log('Database error: ' + err.message);
//     })
connectDB();