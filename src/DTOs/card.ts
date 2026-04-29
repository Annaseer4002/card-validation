import { IsString, IsNotEmpty, Matches, MinLength, MaxLength } from 'class-validator';

export class ValidateCardDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^[0-9\s-]+$/, { 
    message: 'Card number must contain only digits, spaces, or dashes' 
  })
  @MinLength(12, {
    message: 'Card number must be at least 12 characters long'
  })
  @MaxLength(19, {
    message: 'Card number must be at most 19 characters long'
  })
  cardNumber!: string; // The ! tells TS it will be initialized by the request
}
