import db from '../config/connection.js';
import User from '../models/User.js';
import Thought from '../models/Thought.js';
import cleanDB from './cleanDB.js';
// Importing utilities from './data.js'
import { getRandomName, getRandomEmail, getRandomThoughts } from './data.js';

// Data generation utilities
const names = [
  'Aaran', 'Aaren', 'Aarez', 'Aaron', 'Abbas', 'Abdul', 'Smith', 'Jones', 'Ze', 'Zion', 'Xander',
  'Grace', 'Tamar', 'Alex', 'Mark', 'Sarah', 'Nathaniel', 'Parker',
];

const thoughtsText = [
  'A vida é bela quando programamos.',
  'React é incrível!',
  'TypeScript me faz sentir segura.',
  'Express simplifica o backend.',
  'MongoDB é flexível demais!',
  'Deploy no Render é tranquilo.',
  'Aprender todos os dias faz a diferença.',
  'Contribuir com o time é essencial.',
];

const reactionText = [
  'Concordo totalmente!',
  'Isso faz muito sentido!',
  'Haha, adorei isso.',
  'Já passei por isso!',
  'Muito bom!',
  'Mandou bem!',
];

// Random item selector
export const getRandomArrItem = (arr: string | any[]) => arr[Math.floor(Math.random() * arr.length)];
// Removed local declarations of getRandomName, getRandomEmail, and getRandomThoughts


try {
  await db();
  await cleanDB();

  const users = [];

  // Generate 10 random users
  for (let i = 0; i < 10; i++) {
    const fullName = getRandomName();
    const username = fullName.replace(' ', '_').toLowerCase();
    const email = getRandomEmail(fullName);

    // Splitting full name into first and last name
    const [firstName, lastName = 'Doe'] = fullName.split(' ');

    users.push({ firstName, lastName, username, email });
  }

  // Insert users into the database
  const createdUsers = await User.insertMany(users);
  
  // Extract usernames for creating thoughts
  const usernames = createdUsers.map(user => user.username);

  // Generate random thoughts based on created users
  const thoughts = getRandomThoughts(10, usernames);

  // Insert thoughts into the database
  await Thought.insertMany(thoughts);

  console.table(users);
  console.info('🌱 Seeding complete with users and thoughts!');
  process.exit(0);
} catch (error) {
  console.error('❌ Erro ao rodar o seed', error);
  process.exit(1);
}


export default { 
  names,
  thoughtsText,
  reactionText,
  getRandomArrItem,
  getRandomName,
  getRandomEmail,
  getRandomThoughts,
};
