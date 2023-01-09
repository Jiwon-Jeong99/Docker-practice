const express = require('express');
const app = express();
app.get('/', (req, res)=>{
    res.send('Jiwon이가 Docker 처음 써봄')
});

app.listen(8080, () => console.log('Server is running'));