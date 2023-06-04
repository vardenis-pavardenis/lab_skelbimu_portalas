import express from "express"

const express_1 = express()

// middlewares

const middleware_file_server = express.static("../frontend/public")
express_1.use(middleware_file_server)

// endpoints

// listen

const port = 80

express_1.listen(port)