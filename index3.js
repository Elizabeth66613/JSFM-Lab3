import express from "express"; // import express ES module

const z = express();

const PORT = 3000;
// URL => http://localhost:3000/crud
z.get('/crud', (req, res) => {
    res.send('Using get() method (read)');
});

z.post("/crud", (req, res) => {
    res.send('Using post() method (create)');
});

z.put("/crud", (req, res) => {
    res.send('Using put() method (update)');
});

z.delete("/crud", (req, res) => {
    res.send('Using delete() method');
});

z.listen(PORT, () => {
    console.log(`Z listening on port http://localhost:${PORT}`)
})