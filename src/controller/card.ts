import { Request, Response } from "express"
import { validateCardNumber } from "../service/card";
import { ValidateCardDto } from "../DTOs/card";

export const validateCard = async (req: Request, res: Response) => {
   
   try {
    const { cardNumber } = req.body as ValidateCardDto;
    const isValid = validateCardNumber(cardNumber);

    res.status(200).json({
        message: "Success",
        data: {
            cardNumber,
            isValid
        }
    });
    
   } catch (error) {
    res.status(400).json({
        message: "Error",
        error: (error as Error).message
    });
   }
    
};


const cardController = {
    validateCard
}

