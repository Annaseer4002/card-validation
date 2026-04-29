import Express from 'express';
import { validateDtoMiddleware } from '../middewares/card';
import { ValidateCardDto } from '../DTOs/card';
import { validateCard } from '../controller/card';


const Router = Express.Router();


Router.post('/validate-card', validateDtoMiddleware(ValidateCardDto), validateCard )

export default Router;