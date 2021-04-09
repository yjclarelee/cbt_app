const express = require('express');
const app = express();
const port = 8080;

app.listen(port, () => {
	console.log(`port ${port}`);
})

app.use(express.static('html'));
app.set('view engine', 'ejs');
app.set('views', './html');

app.get('/', (req, res) => {
	res.render('index');
})