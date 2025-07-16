# NLW Agent – Fullstack

NLW Agent is a fullstack application that enables users to create rooms, ask questions, and receive AI-generated answers. Users can also record audio, which is transcribed and used as context for more accurate responses.

## Overview

- **Web**: Frontend built with React, Vite, TypeScript, Tailwind CSS, and Shadcn UI. Users can create rooms, ask questions, and record audio.
- **Server**: Backend built with Node.js, Fastify, Drizzle ORM, PostgreSQL, and Gemini API. Handles room and question management, audio transcription, and AI integration.

## Main Features

- Create and list rooms
- Ask questions and get AI answers
- Record and upload audio for transcription and context
- Modern, responsive UI

## Technologies

- React, Vite, TypeScript, Tailwind CSS, Shadcn UI (Web)
- Node.js, Fastify, Drizzle ORM, PostgreSQL, Gemini API, Zod (Server)
- Docker for database setup

## Installation

For detailed installation and setup instructions, refer to the individual README files in the [`web`](web/README.md) and [`server`](server/README.md) folders.

## Requirements

- Node.js >= 18
- Docker (for PostgreSQL database)
- Gemini API Key

## Usage

1. Set up the backend and database (see [`server/README.md`](server/README.md)).
2. Start the frontend (see [`web/README.md`](web/README.md)).
3. Access the application at `http://localhost:5173`.

---

For more details, check the documentation in each part