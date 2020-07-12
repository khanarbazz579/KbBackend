const express = require('express');
const router = express.Router();
const User = require('../../controllers/user/index')
const passport = require('passport');


router.post('/signup', User.create);
router.post('/signin', User.login);
router.post('/google', passport.authenticate('jwt', {scope:['profile'] }));


router.get('/:_id', passport.authenticate('jwt', { session: false }), User.getUser);
router.put('/:_id', passport.authenticate('jwt', { session: false }), User.update);
router.delete('/:_id', passport.authenticate('jwt', { session: false }), User.remove);
module.exports = router;