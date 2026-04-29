"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cardRoute_1 = __importDefault(require("./cardRoute"));
const Router = express_1.default.Router();
Router.use(cardRoute_1.default);
exports.default = Router;
//# sourceMappingURL=index.js.map