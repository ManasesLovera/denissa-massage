import express from 'express';
import mongoose from 'mongoose';

const app = express();

// middleware
app.use(express.json());

app.listen(3000, () => {
    console.log('Server running on port 3000');
})

mongoose.connect('mongodb://127.0.0.1:27017/mydb')
    .then(() => {
        console.log('Database connected');
    })
    .catch(err => {
        console.log('Database error: ' + err.message);
    })