import express from "express";
import "express-async-errors";
import cors from "cors";

import router from "./src/router.js";
import handleError from "./src/handleError.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use(router);
app.use(handleError);

const port = 3500;

app.listen(port, () =>
    console.log(`Aplication running in http://localhost:${port}`)
);
