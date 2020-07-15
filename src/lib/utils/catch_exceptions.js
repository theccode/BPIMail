const catch_exceptions = func => {
    return (req, res, next) => {
        Promise.resolve(func(req, res)).catch(next);
    };
};

module.exports = catch_exceptions;