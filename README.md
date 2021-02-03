# express-mySQL-review

## Instructions

1. npm install
2. Database:
   - Create a DB called "gamesDB" in MySQL
   - Establish a connection in database/index.js
   - Create a schema in database/schema.sql to describe our "Games" table
     - Should have "name", "rating", and "description"
   - Create a seeding function in seed.js
     - Seed the database
     - Confirm that the seed worked by checking the MySQL shell
   - Create dbHelper functions in database/dbHelpers.js
3. Server:
   - Create an Express server in server/index.js
   - Create a simple test GET route
   - Add a start script in package.json
     - Run your script
   - Test the endpoint using Postman
   - Create controller functions in server/controllers.js
   - Create a router in server/router.js
   - Test your endpoints in Postman!
4. (Optional) Try creating a working front-end with React!