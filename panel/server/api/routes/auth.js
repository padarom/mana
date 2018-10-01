const { Router } = require('express')
const router = Router()

router.post('/login', function (req, res) {
  if (req.body.username === 'demo' && req.body.password === 'demo') {
    req.session.authUser = { username: 'demo' }
    return res.json(req.session.authUser)
  }
  res.status(401).json({ error: 'Bad credentials' })
})

router.post('/logout', function (req, res) {
  delete req.session.authUser
  return res.json({ ok: true })
})

module.exports = router
