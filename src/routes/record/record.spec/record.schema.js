import joi from "joi"
import joiToSwagger from "joi-to-swagger";

export const joiSchema = joi.object().keys({
    date: joi.date(),
    time: joi.date()
})
export default joiToSwagger(joiSchema).swagger