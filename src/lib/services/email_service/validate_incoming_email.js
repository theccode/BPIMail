const Joi = require('joi');

const email_schema = Joi.string().email().max(255);

const schema = Joi.object().keys({
    receipients: Joi.array().items(email_schema).min(1).required(),
    subject: Joi.string().min(1).max(255).required(),
    message: Joi.string().min(1).max(1000).required()
});

module.exports = (req, res, next) => {
    const result = Joi.validate(req.body, schema);

    if (result.error){
      return  next( new Error(result.error));
    }

    return next();
};