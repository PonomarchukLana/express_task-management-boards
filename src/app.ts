import express from 'express';
import tasksRouter from './routes/tasks.router.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.use('/tasks', tasksRouter);

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}`);
});
