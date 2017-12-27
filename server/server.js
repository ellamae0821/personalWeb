const express         = require('express');
const bodyParser      = require('body-parser');
const path            = require('path');
const PORT            = process.env.PORT || 8080;
const app             = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', ( req, res ) =>{
  res.json('Smoke Test for Ella');
});

app.get('*', ( req, res ) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

const server = app.listen(PORT,() => {
  console.log(`Awesome site connected on PORT: ${PORT}`);
});