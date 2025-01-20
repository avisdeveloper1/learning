const express = require('express');
const router = express.Router();

router.get('/add-company',(req, res, next) => {
      res.send(`<form action="/new-company" method="post">
            <lable>Company Name: </lable>
            <input type="text" name="company-name">
            <button type="submit">Add</button>
            </form>`);
});

router.post('/new-company',(req, res, next) => {
      console.log(req.body);
      res.send(JSON.stringify(req.body));
});

module.exports = router;