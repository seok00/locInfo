const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`server is listening at localhost`);
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.get('/', (req, res) => {
    res.render('geokakao.ejs')
});
 
app.post('/', (req,res) => {
    console.log(req.body);
});