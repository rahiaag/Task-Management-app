import express from 'express';
import taskRoutes from './routes/taskRoute';

const app = express();

app.use(express.json());
app.use('/tasks', taskRoutes);

app.get('/', (req, res) => {
  res.send('Task Manager API is running');
});

export default app;
