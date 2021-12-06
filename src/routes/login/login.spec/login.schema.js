import joi from "joi"
import joiToSwagger from "joi-to-swagger";

export const joiSchema = joi.object().keys({
    lastName: joi.string(),
    firstName: joi.string(),
    middleName: joi.string(),
    login: joi.string(),
    password: joi.string(),
    phone: joi.string(),
    email: joi.string().email(),
    role: joi.string()
})
export default joiToSwagger(joiSchema).swagger