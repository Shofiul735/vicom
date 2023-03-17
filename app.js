const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;


app.route('/')
    .get((req,res)=>{
        return res.send('Hello')
    });

app.listen(PORT,()=>{
    console.log(`Server up on port ${PORT}`);
})