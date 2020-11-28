const { Router } = require('express');

const router = Router();
router.get('/', (req, res) => {
  res.json({
    message: 'I am the world greatest',
  });
});

module.exports = router;
