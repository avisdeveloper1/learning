const express = require('express');
const router = express.Router();

router.get('/sim-cards',(req, res, next) => {
      res.send(`<ul>
            <li>9876543210</li>
            <li>7894561230</li>
            <li>9638527410</li>
            <li>9517534560</li>
            <li>8529637410</li>
            </ul>`);
});
module.exports = router;