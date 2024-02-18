const express = require('express')
const AccountController = require('./controllers/AccountCOntroller.js')
const verifyIfAccountAlreadyExists = require('./middlewares/accountAlreadyExists.js')
const verifyIfAccountExists = require('./middlewares/accountExists.js')
const verifyIfDepositIsNegative = require('./middlewares/negativeDeposit.js')

const router = express.Router()
const accountController = new AccountController()

router.get('/statement', verifyIfAccountExists, accountController.searchBankStatementOfAccount)
router.post('/account', verifyIfAccountAlreadyExists, accountController.createAccount)
router.put('/deposit', verifyIfAccountExists, verifyIfDepositIsNegative, accountController.depositCash)

module.exports = router
