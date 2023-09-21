import express from 'express';
import http from 'http';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename); // Obtain the directory name using path module

const app = express();
const server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Serve an HTML file
});

const PORT = 3800;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
