const Joi = require('joi');

const schema = Joi.object({
  displayName: Joi.string().min(8).required().label('displayName'),
  password: Joi.string().min(6).required().label('password'),
  email: Joi.string().email().required().label('email'),
  image: Joi.string(),
}).messages({
  'any.required': '{{#label}} is required',
  'string.min': '{{#label}} length must be at least {{#limit}} characters long',
  'string.email': '{{#label}} must be a valid email',
});

module.exports = schema;