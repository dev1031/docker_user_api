const express = require('express');
const PORT = 5000;
const app = express();

app.get('/', (req, res)=>{
    res.status(200).json("Hello from the server side")
})

app.listen(PORT ,()=>{
    console.log(`The server is running at PORT: ${PORT}`)
})
