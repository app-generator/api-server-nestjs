# Nestjs Api Server

Open-Source API server powered by [NestJS](https://app-generator.dev/docs/technologies/nestjs/index.html) a progressive Node.js framework for building efficient, reliable, and scalable server-side applications.

- 👉 [Nestjs Api Server](#) - **Complete Documentation**
- 👉 [Get Support](https://app-generator.dev/ticket/create/) via Email and Discord

## Features  

- Best Practices
- Compatilble with popular React Kits
  - Mantis
  - Berry
- Backend: NestJS
- UI:
  - React Mantis 
  - React Berry (soon) 

## Deployment

- [Render](https://app-generator.dev/docs/deployment/render/index.html)
- [Fly.io](https://app-generator.dev/docs/deployment/fly-io/index.html)
- [Vercel](https://app-generator.dev/docs/deployment/vercel/index.html)

## Backend API

- Best Practices
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

## UI 

### Mantis React

- https://github.com/codedthemes/mantis-free-react-admin-template

### Berry React (soon)

- https://github.com/codedthemes/berry-free-react-admin-template
