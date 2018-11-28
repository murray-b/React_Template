const router = require('express').Router();

router.get('/', (req, res, next) => {
  console.log('Hit API');
  next();
});

module.exports = router;
