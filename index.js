const express = require('express');
var app = express();
const mongoose = require('./connection');
const Cat = mongoose.model('Cat', { name: String });

app.get('/:name&:sub', function (req, res) {
    Cat.findOne({ name: req.params.name }).then(v => {
        console.log(v)
        v.name = req.params.sub


        v.save().then(v => {
            console.log(v)
        }).catch(v => {
            console.log('err', v)
        })

    })
    // const kitty = new Cat({ name: 'Zildjian' });
    // kitty.save().then(() => console.log('meow'));
    res.send('Hello World!');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});