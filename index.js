import express from 'express';
import http from 'http';
import { fileURLToPath } from 'url';
import path from 'path';
import { Server } from 'socket.io';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // Obtain the directory name using path module

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Serve an HTML file
});

const io = new Server(server);

// Define Socket.IO event handlers here
io.on('connection', (socket) => {
  console.log('A user connected'); // This will log when a user connects

  // Define other event handlers or logic here

  socket.on('disconnect', () => {
    console.log('User disconnected'); // This will log when a user disconnects
  });
});

const PORT = 3800;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
