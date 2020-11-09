const express = require('express');
const PORT = 5000;
const app = express();

app.get('/', (req, res)=>{
    res.status(200).json({
        name:"Docker",
        backend:"Express"
    })
})

app.listen(PORT ,()=>{
    console.log(`The server is running at PORT: ${PORT}`)
})
