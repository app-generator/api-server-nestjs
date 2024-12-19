const { Client } = require('pg');

async function createDatabase() {
  const client = new Client({
    host: `${process.env.DB_HOST || "localhost"}`,
    port: `${process.env.DB_PORT || "5432"}`,
    user: `${process.env.DB_USERNAME || "postgres"}`,
    password: `${process.env.DB_PASS || "postgres"}`,
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
