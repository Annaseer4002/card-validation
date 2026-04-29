import Express from "express"
import cardRoute from "./cardRoute"

const Router = Express.Router();

Router.use(
    cardRoute
)


export default Router;