import { validationResult } from "express-validator"
import { ApiError } from "../utils/api-error.js"


export const validate = (req, res) => {

    const error = validationResult(req)

    if (error.isEmpty()) {
        return next()
    }

    const extractedError = []
    error.array().map((err) => extractedError.push({
        [err.path]: err.msg
    }))


    throw new ApiError(422, "Received data is not valid", extractedError)
}