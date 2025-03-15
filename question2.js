// first step i do install npm -y
// and install npm express 

//Imports Express → require('express') loads the Express module.

const express = require('express');

//Creates an Express app → const app = express();.
const app = express();
//Starts the server on port 3000 
const port = 3000;

//Defines a route (/test)  When a client sends a GET request to /test, it responds with JSON:
app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Clifford Seguisabal Alferez' });
});

app.listen(port, () => {
    //Open a browser or use Postman to visit:
    console.log(`Server is running on http://localhost:${port}`);
});