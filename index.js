import express from 'express';
import http from 'http'; // Import the 'http' module, not 'https'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const server = http.createServer(app);

// app.get('/', (req, res) => {
//   res.send({ message: "Hello world" }); // JSON response
// });

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Serve an HTML file
});

const PORT = 3200;
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
