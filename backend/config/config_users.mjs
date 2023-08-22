import mongodb from "mongodb"

export default
    {
        mongodb_client: new mongodb.MongoClient("mongodb+srv://lab_skelbimu_portalas_user_1:aDu5R4QXVlF0rO7Q@cluster1.ypc0j8y.mongodb.net/")
            .db("lab_skelbimu_portalas")
            .collection("users"),
        salt: "ybg2vgwNP5LKNPB",
        validate_username: function (param_username)
        {
            if (param_username === undefined) throw new Error("param_username undefined")
            if (typeof param_username !== "string") throw new Error("param_username is not a string")
            if (param_username.length < 3) throw new Error("param_username too short")
            if (param_username.length > 64) throw new Error("param_username too long")
        },
        validate_password: function (param_password)
        {
            if (param_password === undefined) throw new Error("param_password undefined")
            if (typeof param_password !== "string") throw new Error("param_password is not a string")
            if (param_password.length < 8) throw new Error("param_password too short")
            if (param_password.length > 64) throw new Error("param_password too long")
        },
        validate_identification_token: function (param_indentification_token)
        {
            if (param_indentification_token === undefined) throw new Error("param_indentification_token undefined")
            if (typeof param_indentification_token !== "string") throw new Error("param_indentification_token is not a string")
        },
        validate_patikusiu_skelbimu_sarasas: function (param_patikusiu_skelbimu_sarasas)
        {
            if (param_patikusiu_skelbimu_sarasas === undefined) throw new Error("param_patikusiu_skelbimu_sarasas undefined")
            if (param_patikusiu_skelbimu_sarasas instanceof Array === false) throw new Error("param_patikusiu_skelbimu_sarasas is not an array")
        },
        validate_banned: function (param_banned)
        {
            if (param_banned === undefined) throw new Error("param_banned undefined")
            if (typeof param_banned !== "boolean") throw new Error("param_banned is not a boolean")
        }
    }