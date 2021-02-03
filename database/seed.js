const db = require('./index.js');

const seed = [
  {
    'name': 'League of Legends',
    'rating': 6,
    'description': 'League of Legends is League of Legends'
  },
  {
    'name': 'Pokemon',
    'rating': 9,
    'description': 'Pokémon fun game'
  },
  {
    'name': 'Super Mario Brothers 2',
    'rating': 10,
    'description': 'Super Mario Bros. 2 is the best game of the year.'
  },
  {
    'name': 'Maplestory',
    'rating': 8,
    'description': 'My childhood oh no'
  },
  {
    'name': 'Monopoly',
    'rating': 2,
    'description': 'Its a board game cmon'
  }
];

const seedFunc = () => {
  seed.forEach((item) => {
    db.query(`INSERT INTO Games (name, rating, description) VALUES ("${item.name}", ${item.rating}, "${item.description}")`, (err, results) => {
      if (err) {
        console.log('seed failed');
      } else {
        console.log('seed succeeded');
      }
    });
  })
  db.end();
};

seedFunc();