import joi from "joi"
import joiToSwagger from "joi-to-swagger";

export const joiSchema = joi.object().keys({
    title: joi.string(),
    price: joi.number(),
    category: joi.string()
})
export default joiToSwagger(joiSchema).swagger