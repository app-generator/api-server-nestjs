# Nestjs Api Server

Open-Source API server powered by [NestJS](https://app-generator.dev/docs/technologies/nestjs/index.html) a progressive Node.js framework for building efficient, reliable, and scalable server-side applications.

> Status: **Work in progress**
 
- 👉 [Nestjs Api Server](#) - **Complete Documentation**
- 👉 [Get Support](https://app-generator.dev/ticket/create/) via Email and Discord

<br />

## Features  

- Best Practices
- Backend: NestJS
- UI:
  - React Mantis 

<br />

## Backend API

- Simple, modular & intuitive structure
- Toolchain:
  - Usable with the latest NodeJS Versions with LTS Support: 
    - v22.x
    - v21.x
    - v20.x
  - Package Managers: 
    - PNPM, 
    - Yarn, 
    - Npm  
- Authentication: Auth0 for GitHub
  - GitHub email pulled during OAuth SignIN
  - optional: email validation
- ROLES: Admin, Users 
- TypeORM
- User Profiles:
  - ROLE: default user
  - name, surname
  - bio
  - country
  - address
  - job
 - API:
  - Search, Pagination 
  - Public Access: GET: by ID, get all
  - Private access (needs token):
    - Create, Update, Delete
- ADMIN:
  - can search or mutate any user
- Users:
  - can view and mutate only his information 

## Start with Docker

@Todo

## Start NestJS Backend

> Edit Environment

Add a `.env` file to your project root directory and populate as follows:

```env
AUTH0_DOMAIN=YOUR_AUTH0_DOMAIN
AUTH0_CLIENT_ID=YOUR_AUTH0_CLIENT_ID
AUTH0_CLIENT_SECRET=YOUR_AUTH0_CLIENT_SECRET

JWT_SECRET=YOUR_JWT_SECRET

DB_NAME=YOUR_DB_NAME
DB_PORT=YOUR_DB_PORT
DB_HOST=YOUR_DB_HOST
DB_USER=YOUR_DB_USERNAME
DB_PASS=YOUR_DB_PASSWORD
```

Here's how to get the required Auth0 details, you need to register an client (application) in your Auth0 dashboard.

Follow these steps to register a client with Auth0:

- Open the [Auth0 Applications](https://manage.auth0.com/?_gl=1*1a4zekg*_ga*Mjg3MzE5NzcyLjE3MzcwMjU4MzA.*_ga_QKMSDV5369*MTczNzIwMTkzNy45LjEuMTczNzIwMTk1Ni40MS4wLjA.#/applications) section of the Auth0 Dashboard.

- Click on the Create Application button.

- Provide a Name, such as "GitHub Auth".

- Choose `Single Page Web Applications` as the application type.

- Click on the Create button.

- Finally, note down your `Domain`, `Client ID`, and `Client Secret` and add them to your `.env` file. Click the settings tab if you do not see them.

Choose a random string of letters and nummbers for your `JWT_SECRET` and populate the `DB_` fields with the appropriate data from your database.

> Run the following to install dependencies:

```bash
npm install
```

OR

```bash
yarn
```

> Now create your database

If you haven't already, run the following to create your database

```bash
cd src/database
node db-init.js
```

> Run your server

```bash
npm start
```

OR

```bash
yarn start
```

## Compile [React UI](https://github.com/codedthemes/mantis-free-react-admin-template)

> Edit Environment

Add your server base url to your environment variables as follows

```env
VITE_APP_PUBLIC_URL = <YOUR_SERVER_URL>
```

> Install Dependencies

```bash
npm install
```

OR

```bash
yarn start
```
---
NestJS API Starter  provided by [App Generator](https://app-generator.dev/) - Open-source service for developers and companies.
