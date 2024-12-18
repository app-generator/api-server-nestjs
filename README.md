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
```

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
