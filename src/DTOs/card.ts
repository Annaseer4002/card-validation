import { IsString, IsNotEmpty, Matches, MinLength, MaxLength } from 'class-validator';

export class ValidateCardDto {
  @IsString()
  @IsNotEmpty()
  @Matches(/^[0-9\s-]+$/, { 
  message: 'Card number must contain only digits, spaces, or dashes' 
})
  // We use 13 because that is the minimum length of a real card (Visa)
  @MinLength(13, { message: 'Input is too short' })
  // We use 22 to accommodate a 19-digit card plus spaces/dashes
  @MaxLength(25, { message: 'Input is too long' })
  cardNumber!: string; // The ! tells TS it will be initialized by the request
}
