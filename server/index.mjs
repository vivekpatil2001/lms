import dotenv from 'dotenv';
import app from './app.mjs';
import connectDB from './src/database/db.js';

dotenv.config({
    path: './.env'
});

const PORT = process.env.PORT || 3000;


connectDB()

.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})

.catch((err) => {
    console.log('Error connecting to Express server', err);
    process.exit(1);
});

