# Blsky test Jan 2025 (Front-end)

Hi this is my result for take Blsky test for front-end.
A chat application built using React (Vite) for the front-end and Node.js (Express) for the back-end.

# chat-app

A chat application built using React (Vite) for the front-end.

# chat-server

Node.js (Express) for running Websocket.

## Project Structure

root/ ├── chat-app/ # Front-end: React with Vite ├── chat-server/ # Back-end: Node.js with Express (WebSocket)

## Features

- **Chat App**: Real-time chat interface built with React and Vite.
- **Chat Server**: Back-end server with Express to handle chat messages.

## Installation

### Front-End (chat-app)

1. Navigate to the `chat-app` directory.
    ```bash
    cd chat-app
    ```

2. Install dependencies.
    ```bash
    pnpm install
    ```

3. Run the development server.
    ```bash
    pnpm run dev
    ```

The front-end will be available at `http://localhost:5173`.

4. Build and run.
    ```bash
    pnpm run build
    ```
    ```bash
    pnpm preview
    ```
The front-end will be available at `http://localhost:4173`.

### Back-End (chat-server)

1. Navigate to the `chat-server` directory.
    ```bash
    cd chat-server
    ```

2. Install dependencies.
    ```bash
    pnpm install
    ```

3. Start the server.
    ```bash
    pnpm start
    ```

The back-end API will be available at `ws://localhost:8080` (or another port, depending on your configuration).

## Usage

- Open the front-end in your browser and interact with the chat interface.
- The chat server will handle incoming messages and provide real-time updates.

## Technologies Used

- **Front-End**: React, Vite, WebSockets.
- **Back-End**: Node.js, Express, WebSockets.