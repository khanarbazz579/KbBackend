const express = require('express');
const router = express.Router();
const User = require('../../controllers/user/index')


router.post('/create', passport.authenticate('jwt', { session: false }), User.create);
router.get('/:_id', passport.authenticate('jwt', { session: false }), User.getUser);
router.put('/:_id', passport.authenticate('jwt', { session: false }), User.update);
router.delete('/:_id', passport.authenticate('jwt', { session: false }), User.remove);
