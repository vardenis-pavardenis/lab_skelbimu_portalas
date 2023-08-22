import express from "express"
import cookieParser from "cookie-parser"
import controller_sign_up from "./controllers/controller_sign_up.mjs"

const express_1 = express()

// middlewares

const middleware_file_server = express.static("../frontend/public")
express_1.use(middleware_file_server)

const middleware_parse_json_body = express.json({ limit: "4mb" })
express_1.use(middleware_parse_json_body)

const middleware_parse_cookies = cookieParser()
express_1.use(middleware_parse_cookies)

// endpoints

express_1.post("/api/sign_up", controller_sign_up)

// listen

const port = 80

express_1.listen(port)