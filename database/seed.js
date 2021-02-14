const db = require('./index.js');
// *** Populate our database
// *** seed is entries into database
let seed = [
  {
    'name': 'yahtzee',
    'rating': 6,
    'description': 'random'
  },
  {
    'name': 'settlers of catan',
    'rating': 10,
    'description': 'strategy'
  },
  {
    'name': 'star wars imperial assault',
    'rating': 10,
    'description': 'strategy'
  },
  {
    'name': 'monopoly',
    'rating': 12,
    'description': 'burns bridges, ends friendships'
  },
  {
    'name': 'overwatch',
    'rating': 10,
    'description': 'third person shooter'
  }
];

const seedFunc = () => {
  // query the database to insert this seed
  for (let i = 0; i < seed.length; i++) {
    // *** name and description needs to be in quotes since they're strings
    var queryString = `INSERT INTO Games (name, rating, description) VALUES ('${seed[i][name]}', ${seed[i][rating]}, '${seed[i][description]}')`
    db.query(queryString, (err, data) => {
      if (err) {
        throw err;
      } else {
        console.log('success')
      }
    })
  }
  // *** good to end the connection after a query
  db.end();
};

seedFunc();



//*** we need to run 'node seed.js' in our terminal when we're cd into database file so we can actually run the invoked seedFunc function in our terminal
//*** the reason why we don't include it in our database index.js file is because we don't want this seedFunc to run everytime we run this test our DB