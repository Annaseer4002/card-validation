"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateCardDto = void 0;
const class_validator_1 = require("class-validator");
class ValidateCardDto {
    cardNumber; // The ! tells TS it will be initialized by the request
}
exports.ValidateCardDto = ValidateCardDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Matches)(/^[0-9\s-]+$/, {
        message: 'Card number must contain only digits, spaces, or dashes'
    }),
    (0, class_validator_1.MinLength)(12, {
        message: 'Card number must be at least 13 characters long'
    }),
    (0, class_validator_1.MaxLength)(19, {
        message: 'Card number must be at most 22 characters long'
    }),
    __metadata("design:type", String)
], ValidateCardDto.prototype, "cardNumber", void 0);
//# sourceMappingURL=card.js.map