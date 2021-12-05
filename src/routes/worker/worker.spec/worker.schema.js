import joi from "joi"
import joiToSwagger from "joi-to-swagger";

export const joiSchema = joi.object().keys({
    lastName: joi.string(),
    firstName: joi.string(),
    middleName: joi.string(),
    service: joi.array()
})
export default joiToSwagger(joiSchema).swagger