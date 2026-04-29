import { Request, Response, NextFunction } from 'express';
export declare const validateDtoMiddleware: (dtoClass: any) => (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=card.d.ts.map