"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const card_1 = require("../middewares/card");
const card_2 = require("../DTOs/card");
const card_3 = require("../controller/card");
const Router = express_1.default.Router();
Router.post('/validate-card', (0, card_1.ValidateDtoMiddleware)(card_2.ValidateCardDto), card_3.validateCard);
exports.default = Router;
//# sourceMappingURL=cardRoute.js.map