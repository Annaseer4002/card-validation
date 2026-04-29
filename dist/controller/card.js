"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCard = void 0;
const card_1 = require("../service/card");
const validateCard = async (req, res) => {
    try {
        const { cardNumber } = req.body;
        const isValid = (0, card_1.validateCardNumber)(cardNumber);
        res.status(200).json({
            message: "Success",
            data: {
                cardNumber,
                isValid
            }
        });
    }
    catch (error) {
        res.status(400).json({
            message: "Error",
            error: error.message
        });
    }
};
exports.validateCard = validateCard;
const cardController = {
    validateCard: exports.validateCard
};
//# sourceMappingURL=card.js.map