const errorHandler = (err, req, res, next) => {
    console.error(` Error: ${err.message}`);
    const statusCode = res.statusCode ? res.statusCode : 500;
    res.status(statusCode).json({
        message: err.message || 'Internal Server Error',
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
};

export { errorHandler };
