/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unused-vars */
require('dotenv').config(); // Load environment variables from .env file

const sqlite = require('sqlite3');

async function createDatabase() {
  const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASS, DB_NAME } = process.env;

  // Check if all required environment variables are available
  // if (!DB_HOST || !DB_PORT || !DB_USERNAME || !DB_PASS || !DB_NAME) {
  //   console.error('Missing environment variables!');
  //   process.exit(1); // Exit the process if required variables are missing
  // }

  try {
    var newdb = new sqlite.Database(DB_NAME ? DB_NAME + '.db' : 'database.db');
    await newdb.exec(
      `
         CREATE TABLE "user" (
            "id" INTEGER PRIMARY KEY AUTOINCREMENT,
            "first_name" VARCHAR NOT NULL,
            "last_name" VARCHAR NULL,
            "bio" TEXT NULL,
            "country" VARCHAR NOT NULL,
            "address" VARCHAR NOT NULL,
            "job" VARCHAR NOT NULL,
            "email" VARCHAR NOT NULL,
            "github_id" VARCHAR UNIQUE NULL,
            "role" VARCHAR NOT NULL
        );
  
              `,
    );

    console.log('Database created successfully!');
  } catch (error) {
    if (error.code === '42P04') {
      console.log('Database already exists.');
    } else {
      console.error('Error creating database:', error);
    }
  } finally {
  }
}

createDatabase();
