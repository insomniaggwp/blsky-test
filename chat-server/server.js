const WebSocket = require('ws');
const fs = require('fs');

const PORT = 8080;
const MESSAGE_HISTORY_FILE = 'messageHistory.json';

let messageHistory = [];

if (fs.existsSync(MESSAGE_HISTORY_FILE)) {
  messageHistory = JSON.parse(fs.readFileSync(MESSAGE_HISTORY_FILE));
}

const wss = new WebSocket.Server({ port: PORT });

wss.on('connection', (ws) => {

  ws.send(JSON.stringify({ type: 'history', messages: messageHistory }));

  ws.on('message', (message) => {
    const parsedMessage = JSON.parse(message);
  
    messageHistory.push(parsedMessage);
    fs.writeFileSync(MESSAGE_HISTORY_FILE, JSON.stringify(messageHistory));
  
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(parsedMessage));
      }
    });
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

console.log(`WebSocket server running on ws://localhost:${PORT}`);
