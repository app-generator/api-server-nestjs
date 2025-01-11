require('dotenv').config();  // Load environment variables from .env file

const { Client } = require('pg');

async function createDatabase() {
  const { DB_HOST, DB_PORT, DB_USERNAME, DB_PASS, DB_NAME } = process.env;

  // Check if all required environment variables are available
  if (!DB_HOST || !DB_PORT || !DB_USERNAME || !DB_PASS || !DB_NAME) {
    console.error('Missing environment variables!');
    process.exit(1);  // Exit the process if required variables are missing
  }

  const client = new Client({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USERNAME,
    password: DB_PASS,
  });

  try {
    await client.connect();
    await client.query(`CREATE DATABASE ${DB_NAME};`);
    console.log('Database created successfully.');
  } catch (error) {
    if (error.code === '42P04') {
      console.log('Database already exists.');
    } else {
      console.error('Error creating database:', error);
    }
  } finally {
    await client.end();
  }
}

createDatabase();
