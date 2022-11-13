const {Router} = require('express');
const router  = Router();


router.use(require('./student.route'));


module.exports = router;