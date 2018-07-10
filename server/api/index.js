const router = require('express').Router()

router.use(require('./routes/users'))
router.use(require('./routes/auth'))

module.exports = router
