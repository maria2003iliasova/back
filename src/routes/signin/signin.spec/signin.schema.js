import joi from "joi"
import joiToSwagger from "joi-to-swagger";

export const joiSchema = joi.object().keys({
    login: joi.string(),
    password: joi.string(),
})
export default joiToSwagger(joiSchema).swagger