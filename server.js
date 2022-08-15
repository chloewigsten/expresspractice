// app.get('/greeting/:name', (req, res) => {  res.send({ params: req.params, queries: req.query })});

app.get('/greeting/:name', (req, res) => {  res.send("Hello, <name>")});

app.listen(4000, function() {
    console.log('Listening on port 4000');
});