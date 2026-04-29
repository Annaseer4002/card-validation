import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator';
import { Request, Response, NextFunction } from 'express';

export const validateDtoMiddleware = (dtoClass: any) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const dto = plainToClass(dtoClass, req.body);
    const errors = await validate(dto);
    
    if (errors.length > 0) {
      return res.status(400).json({
        message: "Validation failed",
        errors: errors.map(err => Object.values(err.constraints || {})).flat()
      });
    }
    
    // IMPORTANT: Overwrite req.body with the transformed DTO instance
    req.body = dto; 
    next();
  };
};

export default validateDtoMiddleware
