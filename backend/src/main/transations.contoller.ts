import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export class TransactionController {
  constructor() {}

  /**
   *
   *  This function is used to list all transactions and also to filter transactions by date
   *
   */

  listTransactions = async (start_date, end_date) => {
    try {
      const transactions = await prisma.transactions.findMany({
        where: {
          transactionDate: {
            gte: start_date,
            lt: end_date,
          },
        },
      });

      return transactions;
    } catch (error) {
      throw new Error("Server Error!");
    }
  };

  /**
   *
   *
   *  This function is used to get the transaction details of a single transaction
   *
   */

  transactionDetails = async (transaction_id) => {
    try {
      const singleTransaction = await prisma.transactions.findUnique({
        where: {
          id: transaction_id,
        },
      });

      return singleTransaction;
    } catch (error) {
      throw new Error("Server Error!");
    }
  };
}
