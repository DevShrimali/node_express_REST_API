import express from 'express';
import bodyParser from 'body-parser';
import usersRounter from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRounter);
app.get('/', (req, res)=>res.send('Welcome to Home'));

app.listen(PORT, ()=> console.log(`Server Running on port: http://localhost:${PORT}`));
