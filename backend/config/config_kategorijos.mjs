import mongodb from "mongodb"

export default
    {
        mongodb_client: new mongodb.MongoClient("mongodb+srv://lab_skelbimu_portalas_user_1:aDu5R4QXVlF0rO7Q@cluster1.ypc0j8y.mongodb.net/")
            .db("lab_skelbimu_portalas")
            .collection("kategorijos"),
        validate_id: function (param_id)
        {
            if (param_id === undefined) throw new Error("param_id undefined")
            if (typeof param_id !== "string") throw new Error("param_id is not a string")
            if (param_id.length !== 24) throw new Error("param_id unvalid length")
        },
        validate_pavadinimas: function (param_pavadinimas)
        {
            if (param_pavadinimas === undefined) throw new Error("param_pavadinimas undefined")
            if (typeof param_pavadinimas !== "string") throw new Error("param_pavadinimas is not a string")
            if (param_pavadinimas.length < 3) throw new Error("param_pavadinimas too short")
            if (param_pavadinimas.length > 64) throw new Error("param_pavadinimas too long")
        }
    }