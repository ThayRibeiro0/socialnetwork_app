import { Request, Response, RequestHandler } from 'express';
import Thought from '../models/Thought.js';

// Create a new thought
export const createThought: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  const { thoughtText, username } = req.body;

  try {
    // Create the thought with correct properties (thoughtText and username)
    const newThought = await Thought.create({ thoughtText, username });
    res.status(201).json(newThought);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao criar pensamento', error });
  }
};

// Get thoughts by a specific user
export const getThoughtsByUser: RequestHandler = async (req: Request, res: Response) => {
  const { userId } = req.params;

  try {
    const thoughts = await Thought.find({ username: userId });
    res.status(200).json(thoughts);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar pensamentos', error });
  }
};

// Get a thought by its ID
export const getThoughtById: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  const { thoughtId } = req.params;

  try {
    const thought = await Thought.findById(thoughtId);
    if (!thought) {
      res.status(404).json({ message: 'Pensamento não encontrado' });
      return;
    }
    res.status(200).json(thought);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar pensamento', error });
  }
};

// Update a thought by its ID
export const updateThought: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  const { thoughtId } = req.params;
  const { thoughtText } = req.body;  // Match with the model's property

  try {
    const updated = await Thought.findByIdAndUpdate(
      thoughtId,
      { thoughtText },
      { new: true }
    );
    if (!updated) {
      res.status(404).json({ message: 'Pensamento não encontrado' });
      return;
    }
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar pensamento', error });
  }
};

// Delete a thought by its ID
export const deleteThought: RequestHandler = async (req: Request, res: Response): Promise<void> =>  {
  const { thoughtId } = req.params;

  try {
    const deleted = await Thought.findByIdAndDelete(thoughtId);
    if (!deleted) {
    res.status(200).json({ message: 'Pensamento deletado com sucesso' });
    return;
    }
    return;
  }
  catch (error) {
    res.status(500).json({ message: 'Erro ao deletar pensamento', error });
    return;
  }
};

export default {
  createThought,  
  getThoughtsByUser,
  getThoughtById,
  updateThought,
  deleteThought
};
