import swaggerUi from "swagger-ui-express";
import proxy from "express-http-proxy";
import express from "express";
import "express-async-errors";
import cors from "cors";

import { endpointApiComment } from "./api.js";
import { apiDocs } from "./docs/api.js";
import router from "./router.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(apiDocs));
app.use(
    "/comment",
    proxy("http://localhost:3500", {
        proxyReqPathResolver: function(req) {
            return "/comment" + req.url;
        },
        proxyErrorHandler: function (err, res, next) {
            console.log(err);
            next(err);
        },
    })
);

app.use((err, req, res, next) => {
    console.error(err);
    const message = err.message || "An unexpected error occurred";
    const status = err.response?.status || 400;
    res.status(status).json({ message, success: false });
});

const port = 3000;

app.listen(port, () =>
    console.log(`Aplication running in http://localhost:${port}`)
);
