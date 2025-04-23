class ApiError extends Error {
    constructor(
        statusCode,
        message = "",
        errors = [],
        stack = ""
    ) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.sucess = false;
        this.errors = errors;
        

    }
}


export { ApiError }