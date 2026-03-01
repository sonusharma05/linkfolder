const zod = require("zod")

const userSchema = zod.object({
    username:zod.string(),
    Email:zod.string(),
    password:zod.string(),
    Age:zod.number(),
    phoneNo:zod.string(),
})

const signinSchema = zod.object({
    username:zod.string().optional(),
    Email:zod.string().optional(),
    password:zod.string()
})

module.exports={
    userSchema,
    signinSchema
}