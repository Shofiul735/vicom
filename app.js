const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname,'public')));

app.route('/')
    .get((req,res)=>{
        return res.sendFile('index.html')
    });

app.listen(PORT,()=>{
    console.log(`Server up on port ${PORT}`);
})