const encode_image_to_base64 = function (param_file)
{
    return new Promise(
        function (resolve, reject)
        {
            const file_reander = new FileReader()

            // onerror

            file_reander.onerror = function ()
            {
                reject({ status: "error" })
            }

            // onload

            file_reander.onload = function ()
            {
                resolve({ status: "success", file: file_reander.result })
            }

            //

            file_reander.readAsDataURL(param_file)
        }
    )
}

export default encode_image_to_base64