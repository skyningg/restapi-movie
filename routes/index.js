const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();
router.get('/', (req, res) => res.send('Welcome to my movie api'));
router.post('/movies', controllers.createMovie);
router.get('/movies', controllers.getAllMovies);

module.exports = router;
