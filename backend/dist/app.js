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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = require("./config");
const express_graphql_1 = require("express-graphql");
const graphql_tools_1 = require("graphql-tools");
const transations_contoller_1 = require("./main/transations.contoller");
const { listTransactions, transactionDetails } = new transations_contoller_1.TransactionController();
const app = (0, express_1.default)();
let typeDefs = [
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
        list: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            console.log(args);
            return yield listTransactions(args.start_date, args.end_date);
        }),
        transactionDetail: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            return yield transactionDetails(args.transaction_id);
        }),
    },
    Transaction: {},
};
app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
    schema: (0, graphql_tools_1.makeExecutableSchema)({ typeDefs, resolvers }),
    graphiql: true,
}));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.listen(config_1.port, () => {
    return console.log(`Express is listening at http://localhost:${config_1.port}`);
});
//# sourceMappingURL=app.js.map