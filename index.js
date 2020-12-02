const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req,res) => {
    res.send(' Selamat Pagi ');
});
app.listen(port, () => console.log(`Listening port ${port}`));
