/**
 * Created by vali on 7/8/15.
 */

var Joi = require('joi');

module.exports = {
    constructor: Joi.object().keys({
        email: Joi.string().email().required(),
        token: Joi.string().alphanum().min(32).max(32).required()//cloudflare token has 32 chars
    }).with('email', 'token')
};