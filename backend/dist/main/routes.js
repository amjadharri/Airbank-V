"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = __importDefault(require("express"));
const transations_contoller_1 = require("./transations.contoller");
exports.routes = express_1.default.Router();
const { listTransactions, transactionDetails } = new transations_contoller_1.TransactionController();
exports.routes.get("/list", listTransactions);
exports.routes.get("/detail", transactionDetails);
//# sourceMappingURL=routes.js.map