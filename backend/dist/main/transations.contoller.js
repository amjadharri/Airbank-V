"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionController = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
class TransactionController {
    constructor() {
        /**
         *
         *  This function is used to list all transactions and also to filter transactions by date
         *
         */
        this.listTransactions = (start_date, end_date) => __awaiter(this, void 0, void 0, function* () {
            try {
                const transactions = yield prisma.transactions.findMany({
                    where: {
                        transactionDate: {
                            gte: start_date,
                            lt: end_date,
                        },
                    },
                });
                return transactions;
            }
            catch (error) {
                throw new Error("Server Error!");
            }
        });
        /**
         *
         *
         *  This function is used to get the transaction details of a single transaction
         *
         */
        this.transactionDetails = (transaction_id) => __awaiter(this, void 0, void 0, function* () {
            try {
                const singleTransaction = yield prisma.transactions.findUnique({
                    where: {
                        id: transaction_id,
                    },
                });
                return singleTransaction;
            }
            catch (error) {
                throw new Error("Server Error!");
            }
        });
    }
}
exports.TransactionController = TransactionController;
//# sourceMappingURL=transations.contoller.js.map