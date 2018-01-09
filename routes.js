const express = require('express');
const router  = express.Router();

    app.get('/instruments', function(req, res){
        res.render('instruments', {
            title: 'Instruments'
        });
    });

    app.get('/type', function(req, res){
        res.render('type', {
            title: 'Type'
        });
    });



    module.exports = router;
