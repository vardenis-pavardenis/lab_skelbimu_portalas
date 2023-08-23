import mongodb from "mongodb"

export default
    {
        mongodb_client: new mongodb.MongoClient("mongodb+srv://lab_skelbimu_portalas_user_1:aDu5R4QXVlF0rO7Q@cluster1.ypc0j8y.mongodb.net/")
            .db("lab_skelbimu_portalas")
            .collection("skelbimai"),
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
        },
        validate_kategorija: function (param_kategorija)
        {
            if (param_kategorija === undefined) throw new Error("param_kategorija undefined")
            if (typeof param_kategorija !== "string") throw new Error("param_kategorija is not a string")
            if (param_kategorija.length < 3) throw new Error("param_kategorija too short")
            if (param_kategorija.length > 64) throw new Error("param_kategorija too long")
        },
        validate_aprasas: function (param_aprasas)
        {
            if (param_aprasas === undefined) throw new Error("param_aprasas undefined")
            if (typeof param_aprasas !== "string") throw new Error("param_aprasas is not a string")
            if (param_aprasas.length < 3) throw new Error("param_aprasas too short")
            if (param_aprasas.length > 512) throw new Error("param_aprasas too long")
        },
        validate_kaina: function (param_kaina)
        {
            if (param_kaina === undefined) throw new Error("param_kaina undefined")
            if (typeof param_kaina !== "number") throw new Error("param_kaina is not a number")
        },
        validate_image_base64: function (param_image_base64)
        {
            if (param_image_base64 === undefined) throw new Error("param_image_base64 undefined")
            if (typeof param_image_base64 !== "string") throw new Error("param_image_base64 is not a string")
        },
        validate_komentaras: function (param_komentarai)
        {
            if (param_komentarai === undefined) throw new Error("param_komentaras undefined")
            if (typeof param_komentarai !== "string") throw new Error("param_komentaras is not a string")
            if (param_komentarai.length < 3) throw new Error("param_komentarai too short")
            if (param_komentarai.length > 256) throw new Error("param_komentarai too long")
        }
    }