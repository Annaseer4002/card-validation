"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateDtoMiddleware = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const validateDtoMiddleware = (dtoClass) => {
    return async (req, res, next) => {
        const dto = (0, class_transformer_1.plainToClass)(dtoClass, req.body);
        const errors = await (0, class_validator_1.validate)(dto);
        if (errors.length > 0) {
            return res.status(400).json({
                message: "Validation failed",
                errors: errors.map(err => Object.values(err.constraints || {})).flat()
            });
        }
        next();
    };
};
exports.validateDtoMiddleware = validateDtoMiddleware;
exports.default = exports.validateDtoMiddleware;
//# sourceMappingURL=card.js.map