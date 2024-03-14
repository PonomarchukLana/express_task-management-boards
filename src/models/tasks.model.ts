import { DataTypes } from 'sequelize';

export const tasks = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  status: {
    type: DataTypes.ENUM('todo', 'inProgress', 'done'),
    allowNull: false,
    validate: {
      isIn: {
        args: [['todo', 'inProgress', 'done']],
        msg: 'Wrong status',
      },
    },
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
  },
};
