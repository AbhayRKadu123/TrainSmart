let Joi=require('joi')
const { join } = require('path')

module.exports.schema = Joi.array().items(Joi.object({muscle:Joi.string().required(),exercise:Joi.string().required(),sets:Joi.object().required()}).required()).required()