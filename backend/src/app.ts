import express from "express";
import cors from "cors";
import { port } from "./config";
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from "graphql-tools";
import { TransactionController } from "./main/transations.contoller";

const { listTransactions, transactionDetails } = new TransactionController();

const app: express.Application = express();

let typeDefs: any = [
  `
  type Query {
    list(start_date: String, end_date: String): [Transaction]
    transactionDetail(transaction_id : String): Transaction
  },
  type Transaction {
    id: String
    account: String
    description: String
    category: String
    reference: String
    currency: String
    amount: Int,
    status: String
    transactionDate: String
    createdAt: String
    updatedAt: String

  }
`,
];

let resolvers = {
  Query: {
    list: async (_, args) => {
      console.log(args);
      return await listTransactions(args.start_date, args.end_date);
    },
    transactionDetail: async (_, args) => {
      return await transactionDetails(args.transaction_id);
    },
  },
  Transaction: {},
};

app.use(
  "/graphql",
  graphqlHTTP({
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    graphiql: true,
  })
);

app.use(cors());

app.use(express.json());

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
