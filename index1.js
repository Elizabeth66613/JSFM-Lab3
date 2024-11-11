
import express from 'express'; // import express ES module

const x = express(); 
const PORT = 3000;

// URL: http://localhost:3000/
// get('url end-point', callback)
x.get('/', (req, res) => {
  // text on the page
  res.send('<h1>Harsh Saini<h1><h2>Elizaveta Aleksenko<h2><h3>Sooraj Thomas<h3>')
});


x.listen(PORT, () => {
  console.log(`X listening on port http://localhost:${PORT}`)
})