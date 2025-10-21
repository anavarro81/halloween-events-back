"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorMiddleware = (error, req, res, next) => {
    console.error('error details: ', {
        message: error.message,
        stack: error.stack,
        context: error.context || 'context not provided',
        url: req.url,
        method: req.method
    });
    let httpError = error.statusCode || 500;
    let message = error.message || "Se producido un error al realizar la petición";
    res.status(httpError).json(message);
};
exports.default = errorMiddleware;
//# sourceMappingURL=error.middleware.js.map