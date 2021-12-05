import joi from "joi"
import joiToSwagger from "joi-to-swagger";

export const joiSchema = joi.object().keys({
    title: joi.string(),
    price: joi.number()
})
export default joiToSwagger(joiSchema).swagger