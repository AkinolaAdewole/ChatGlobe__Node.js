import express from 'express';
const app = express();

import http from 'https'
const server = http.createServer(app);

// app.get('/', (req,res)=>{
//     res.send({message:"Hello world"});
// });
app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
});

const PORT= process.env.PORT 
server.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`);
})