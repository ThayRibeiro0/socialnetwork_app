import { Request, Response } from 'express';
import User from '../models/User.js';
// import { ObjectId } from 'mongodb';

/**
 * Create a new user
 */
export const createUser = async (req: Request, res: Response) => {
    try {
        const { username, email } = req.body;

        if (!username || !email) {
            res.status(400).json({ message: 'Username and email are required' });
        }
        // Create a new user
        const newUser = new User({
            username,
            email,
            thoughts: [],
            friends: [],
        });
        await newUser.save();
        console.log('User created:', newUser);

        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
    }
};

/**
 * Get all users
 */
export const getAllUsers = async (_req: Request, res: Response) => {
    try {
        const users = await User.find();
        res.json({ users });
        console.log('Users retrieved:', users);
    } catch (err) {
        res.status(500).json({ message: (err as Error).message });
    }
};

/**
 * Get a user by ID
 */
export const getUserById = async (req: Request, res: Response) => {
    const { userId } = req.params;
    try {
        const user = await User.findById(userId);
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: (err as Error).message  });
    }
};

/**
 * Update a user
 */
export const updateUser = async (req: Request, res: Response) => {
    const { userId } = req.params;
    try {
        const updatedUser = await User.findByIdAndUpdate(userId, req.body, { new: true });
        if (updatedUser) {
            res.json(updatedUser);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: (err as Error).message  });
    }
};

/**
 * Delete a user
 */
export const deleteUser = async (req: Request, res: Response) => {
    const { userId } = req.params;
    try {
        const user = await User.findByIdAndDelete(userId);
        if (user) {
            res.json({ message: 'User deleted successfully' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        res.status(500).json({ message: (err as Error).message  });
    }
};


export default {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
};