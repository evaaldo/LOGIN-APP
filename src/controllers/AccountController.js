const AccountService = require('../services/AccountService.js')

const accountService = new AccountService()

class AccountController {

    async createAccount(request, response) {

        const { cpf, name } = request.body

        await accountService.createAccount(cpf, name)

        try {

            return response.status(201).json({ message: "Account created!" })

        } catch(error) {

            return error

        }

    }

    async searchBankStatementOfAccount(request, response) {

        const { cpf } = request.body

        const accountDatabase = await accountService.searchBankStatementOfAccount(cpf)

        try {

            return response.status(200).json(accountDatabase)

        } catch(error) {

            return error

        }

    }

    async depositCash(request, response) {

        const { cash, cpf, datetime } = request.body

        await accountService.depositCash(cash, cpf, datetime)

        try {

            return response.status(201).json({ message: "Succesfull deposit!" })

        } catch(error) {

            return response.status(400).json({ message: "Wasn't possible to deposit!" })

        }

    }

    async withdrawCash(request, response) {

    }

    async searchBankStatementOfAccountByDate(request, response) {

    }

    async updateAccountData(request, response) {

    }

    async getDataOfAccount(request, response) {

    }

    async deleteAccount(request, response) {

    }

}

module.exports = AccountController