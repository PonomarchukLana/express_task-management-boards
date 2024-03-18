import { type Request, type Response } from 'express';
import { Tasks } from '../db.js';

export const createTask = async (req: Request, res: Response): Promise<void> => {
  const { index, title, description, status } = req.body;

  try {
    const data = await Tasks.create({
      index,
      title,
      description,
      status,
    });
    res.status(201).send(data);
  } catch (err) {
    res.sendStatus(501).json({
      message: err instanceof Error ? err.message : 'error',
    });
  }
};

export const taskList = async (req: Request, res: Response): Promise<void> => {
  try {
    const data = await Tasks.findAll();
    res.status(200).send(data);
  } catch (err) {
    res.sendStatus(500).json({
      message: err instanceof Error ? err.message : 'error',
    });
  }
};

export const getTaskById = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const data = await Tasks.findOne({
      where: {
        id: id,
      },
    });
    res.status(200).send(data);
  } catch (err) {
    res.sendStatus(500).json({
      message: err instanceof Error ? err.message : 'error',
    });
  }
};

export const updateTask = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const body = req.body;

  try {
    await Tasks.update(body, {
      where: {
        id: id,
      },
    });
    const updatedData = await Tasks.findByPk(id);

    res.status(200).send(updatedData);
  } catch (err) {
    res.sendStatus(501).json({
      message: err instanceof Error ? err.message : 'error',
    });
  }
};

export const deleteTask = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    Tasks.destroy({
      where: {
        id: id,
      },
    });
    res.status(200).send({ id: id });
  } catch (err) {
    res.sendStatus(501).json({
      message: err instanceof Error ? err.message : 'error',
    });
  }
};
