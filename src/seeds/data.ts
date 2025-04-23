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

// Get random item
export const getRandomArrItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];

// Get random name
export const getRandomName = () =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Get random email
export const getRandomEmail = (name: string) =>
  `${name.toLowerCase().replace(' ', '')}@example.com`;

// Get random thoughts
export const getRandomThoughts = (count: number, usernames: string[]) => {
  const thoughts = [];
  for (let i = 0; i < count; i++) {
    thoughts.push({
      thoughtText: getRandomArrItem(thoughtsText),
      username: getRandomArrItem(usernames),
      reactions: [
        {
          reactionBody: getRandomArrItem(reactionText),
          username: getRandomArrItem(usernames),
        },
        {
          reactionBody: getRandomArrItem(reactionText),
          username: getRandomArrItem(usernames),
        },
      ],
    });
  }
  return thoughts;
};
