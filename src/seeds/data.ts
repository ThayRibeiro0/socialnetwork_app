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
  
  // Return a random item from an array
  export const getRandomArrItem = (arr: string[]) => arr[Math.floor(Math.random() * arr.length)];
  
  // Create a random name
  export const getRandomName = () =>
    `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;
  
  // Create a random email
  export const getRandomEmail = (name: string) =>
    `${name.toLowerCase().replace(' ', '')}@example.com`;
  
  // Create a random thought
  export const getRandomThoughts = (count: number, userIds: string[]) => {

    interface Thought {
      thoughtText: string;
      username: string;
      reactions: {
        reactionBody: string;
        username: string;
      }[];
    }
    
    const thoughts: Thought[] = [];
    for (let i = 0; i < count; i++) {
      thoughts.push({
        thoughtText: getRandomArrItem(thoughtsText),
        username: getRandomArrItem(userIds),
        reactions: [
          {
            reactionBody: getRandomArrItem(reactionText),
            username: getRandomArrItem(userIds),
          },
          {
            reactionBody: getRandomArrItem(reactionText),
            username: getRandomArrItem(userIds),
          },
        ],
      });
    }
    return thoughts;
  };
 
export default { 
  names,
  thoughtsText,
  reactionText,
  getRandomArrItem,
  getRandomName,
  getRandomEmail,
  getRandomThoughts,
}