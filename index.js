import express from 'express';
const app = express();

import http from 'https'
const server = http.createServer(app);

const PORT= process.env.PORT || 3500
server.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
})

app.get('/', (req,res)=>{
    res.send('Hello World')
})