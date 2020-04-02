const router = require('express').Router({ caseSensitive: true, strict: true });

// Public routes
const { login, register } = require('./controllers/auth');

router.route('/register').post(register);
router.route('/login').post(login);

// Private routes
const { getUser } = require('./controllers');
const { verifyAuth } = require('./middlewares');

router.route('/user').get(verifyAuth, getUser);

module.exports = router;
