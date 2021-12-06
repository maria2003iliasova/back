import joi from "joi"
import joiToSwagger from "joi-to-swagger";

export const joiSchema = joi.object().keys({
    date: joi.date(),
    time: joi.date(),
    user: joi.object(),
    worker: joi.object(),
    service: joi.array()
})
export default joiToSwagger(joiSchema).swagger