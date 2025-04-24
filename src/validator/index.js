import { body } from "express-validator";


const userRegistrationValidator = () => {
    return [
        body("email")
            .trim()
            .notEmpty().withMessage("Email is required")
            .isEmail().withMessage("Email is invalid"),
        body("username")
            .trim()
            .notEmpty().withMessage("username is required")
            .isLength({ min: 3 }).withMessage("username should be at least 3 character")
            .isLength({ max: 16 }).withMessage("username cannot exceed more then 16 character")
    ]
}


const userLoginValidator = () => {
    return [
        body("email")
            .isEmail().withMessage("Email is Not valid "),
        body("password")
            .notEmpty().withMessage("Password cannot be empty"),
    ]
}



export { userRegistrationValidator, userLoginValidator }