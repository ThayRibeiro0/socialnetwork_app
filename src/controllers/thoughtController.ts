import { Request, Response, RequestHandler } from 'express';
import Thought from '../models/Thought.js';
import User from '../models/User.js';

// Create a new thought
export const createThought: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { thoughtText, username } = req.body;  // Agora pega `thoughtText` do corpo da requisição

    if (!thoughtText || !username) {
    res.status(400).json({ message: "É necessário fornecer 'thoughtText' e 'username'" });
    }

    // Cria o novo pensamento com `thoughtText` e `username`
    const newThought = await Thought.create({ thoughtText, username, user: userId });

    // Atualiza o usuário com o novo pensamento
    await User.findByIdAndUpdate(userId, {
      $push: { thoughts: newThought._id }
    });

    res.status(201).json(newThought);
    return;
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar pensamento', error: err });
    return;
  }
};


// Get thoughts by a specific user
export const getThoughtsByUser: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId).populate('thoughts');
    if (!user) {
      res.status(404).json({ message: 'Usuário não encontrado' });
      return;
    }
    res.status(200).json(user.thoughts);
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
export const deleteThought: RequestHandler = async (req: Request, res: Response): Promise<void> => {
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
