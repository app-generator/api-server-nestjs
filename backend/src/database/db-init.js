const { Client } = require('pg');

async function createDatabase() {
  const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'postgres',
  });

  try {
    await client.connect();
    await client.query(`CREATE DATABASE ${process.env.DB_NAME};`);
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
