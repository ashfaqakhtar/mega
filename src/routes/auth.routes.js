import { Router } from "express";
import { registerUser } from "../controllers/auth.controllers.js";
import { userRegistrationValidator } from "../middlewares/validator.middleware.js";


const router = Router()

router.route("/register").post(userRegistrationValidator(), registerUser, registerUser)





export default router;