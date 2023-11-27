import express from "express";
import "express-async-errors";
import cors from "cors";

import router from "./router.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

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
