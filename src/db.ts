import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';
import { tasks } from './models/tasks.model.js';

dotenv.config();

const { DB_URL } = process.env;

if (typeof DB_URL !== 'string') {
  console.log('env variables error');
  process.exit(1);
}

export const sequelize = new Sequelize(DB_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  }
});

export const Tasks = sequelize.define('Tasks', tasks, {
  tableName: 'Tasks'
});