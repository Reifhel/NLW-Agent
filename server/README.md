# NLW Agent – Server

This is the back-end of the NLW Agent application, responsible for orchestrating conversation logic with the API, handling database interactions, and integrating with the Gemini agent.

---

## Technologies

- Node.js with TypeScript
- Fastify
- Drizzle ORM with Postgres
- Gemini
- Zod for data validation
- dotenv for environment variables

---

## Installation and Execution

1. Clone this repository and navigate to the server folder:

   ```bash
   git clone https://github.com/Reifhel/NLW-Agent.git
   cd NLW-Agent/server
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start Docker to run the database:

   ```bash
   docker compose up -d
   ```

4. Set up environment variables (see below).

5. Run migrations and start the server in development mode:

   ```bash
   npm run db:migrate && npm run dev
   ```

The server will be available at `http://localhost:3333`.

---

## Environment Variables

| Name           | Description                   | Example                                          |
| -------------- | ----------------------------- | ------------------------------------------------ |
| DATABASE_URL   | Docker database URL           | postgresql://docker:docker@localhost:5432/agents |
| GEMINI_API_KEY | Gemini authentication key     | sk-****************\*****************            |
| PORT           | Port on which the server runs | 3333                                             |

Create a `.env` file at the root of the `server/` folder with these variables.

---

## Main Endpoints

- **GET /rooms**  
  Retrieves all rooms from the database.

- **POST /rooms**  
  Creates a new room.

- **GET /rooms/:roomId/questions**  
  Retrieves all questions for a specific room.

- **POST /rooms/:roomId/questions**  
  Creates a new question and generates an answer using Gemini.

- **POST /rooms/:roomId/questions**  
  Receives an audio file, transcribes it, generates embeddings using the Gemini API, and then saves the result to the database.
