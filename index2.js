import express from 'express'; // import express ES module


import data from './data/players.json' assert { type: 'json' }; //import the JSON file

const y = express(); 

const PORT = 3000;

// URL => http://localhost:3000/players
y.get("/players", (req, res) => {
    // using the response with the method ".json()"" to get the JSON data 
    // and send a JSON response to the route handler:
    res.json(data);
});


y.listen(PORT, () => {
    console.log(`Y listening on port http://localhost:${PORT}`)
})