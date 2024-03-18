import express from 'express';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import tasksRouter from './routes/tasks.router.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, 'dist/app')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.use('/tasks', tasksRouter);

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}`);
});
