# Node.js Template with TypeScript, ESLint, Prettier, JWT, Zod and Docker

This template offers a robust foundation for building backend applications with **Node.js**, **TypeScript**, and **Clean Architecture** principles. It features built-in authentication using **JWT** with fully implemented use cases and **DDD** layers. While the data sources are not pre-configured for specific databases, the template is completely extensible and ready for seamless integration with **MongoDB**, **PostgreSQL**, or others.

## 🛠️ Stack

- [TypeScript](https://www.typescriptlang.org) - Typed superset of JavaScript for enhanced code quality.
- [Node.js](https://nodejs.org) - JavaScript runtime built on Chrome's V8 engine.
- [Express.js](https://expressjs.com) - Minimalist web framework for Node.js.
- [JWT](https://jwt.io/introduction) - JSON Web Tokens for secure user authentication.
- [Zod](https://zod.dev) - TypeScript-first schema validation with static type inference.
- [Docker](https://www.docker.com) - Platform for developing, shipping, and running applications in containers.
- [ESLint](https://eslint.org) & [Prettier](https://prettier.io) - Code linting and formatting tools for consistent, clean, and error-free code.

## 🏗️ Project Architecture

- 📂 **config/**:  
  A dedicated layer for handling external packages and third-party integrations. This architecture leverages an adapter pattern, allowing fluid changes to dependencies without cascading effects throughout the application. For example, changing a library only affects this layer, ensuring that the rest of the system is not affected.

- 📂 **data/**:  
  This layer encapsulates all interactions with the database. It is designed to manage different data sources, providing the necessary configuration for connections, migrations, and models. By isolating the data management logic here, the system can easily support multiple databases without coupling them to the business logic.

- 📂 **domain/**:  
  In the domain layer resides the core of the business logic. It is completely independent of any external infrastructure or framework, ensuring that business rules remain pure and reusable. This layer defines entities, rules, and use cases that drive the core functionality of the application.

- 📂 **infrastructure/**:  
  The infrastructure layer brings to life the abstract rules defined in the domain layer by implementing data sources and external service integrations. It manages the actual interaction with databases, APIs, or any other external systems.

- 📂 **presentation/**:  
  This layer focuses on how the system interacts with the external world, specifically through API endpoints. It contains all framework-specific components, such as drivers, routes, and middleware. By isolating these concerns, the architecture remains adaptable, allowing easy migration to different frameworks without affecting the business logic.

## 📚 Usage and Modifications

This template is agnostic to any database. To connect to a database:

1. Choose the database you'd like to use and run the corresponding Docker setup (`docker-compose`).
2. Modify the Data Layer (`/data`) to implement models, repositories, and database interactions.
3. Once your database is integrated, you'll need to adapt the `infrastructure` and `domain` layers where necessary to ensure the application functions correctly with your chosen data source.

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/Martinchx/Node-TS-Clean
   cd Node-TS-Clean
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Rename `.env.template` to `.env` and configure environment variables**

   ```env
    PORT = 3000

    WEBSERVICE_URL = http://localhost:3000/api

    JWT_SECRET = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJtZXNzYWdlIjoiV2hhdCBhcmUgeW91IHRyeWluZyB0byBkbz8iLCJpYXQiOjE3MDM4MTg0NzcsImV4cCI6MTcwMzgyNTY3N30.2WPBN1qBJ5Ry0qvu3hSjVvxV-t-nEfBpvqj9-E06OLQ
   ```

4. **Start the database container**

   ```bash
   docker compose up -d

   ```

5. **Start the server in development mode**
   ```bash
   npm run dev
   ```

📦 **Additional Features**

- **Zod Validation**: Ensures all data is properly validated.
- **Clean Architecture**: Decoupled structure for scalability and easy maintenance.
- **Pre-configured ESLint & Prettier**: For clean, consistent, and error-free code.
- **Docker Support**: Quick environment setup, ready for integration with any database.
