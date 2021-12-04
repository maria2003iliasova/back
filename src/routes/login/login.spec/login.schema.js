import joi from "joi"
import joiToSwagger from "joi-to-swagger";

export const joiSchema = joi.object().keys({
    surname: joi.string(),
    name: joi.string(),
    middle_name: joi.string(),
    login: joi.string(),
    password: joi.string(),
    telephone: joi.string(),
    email: joi.string().email()
})
export default joiToSwagger(joiSchema).swagger