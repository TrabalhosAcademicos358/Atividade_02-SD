import express from "express";
import cors from "cors";

const app = express();

const endpointGoogle = "https://www.googleapis.com/auth/books";

app.use(express.json());
app.use(cors());

app.get("/livros", async (req, res) => {
    const searchBook = req.query.q;
    const config = {};
    const endpoint = `${endpointGoogle}?q=${searchBook}+intitle`;
    const response = await fetch(endpoint, config);
    res.json(response.json());
});

app.get("/livros/:id", async (req, res) => {
    const { id } = req.body;
    const config = {};
    const response = await fetch(`${endpointGoogle}?id=${id}`, config);
    res.json(response.json());
});

const port = 3000;

app.listen(port, () =>
    console.log(`Aplication running in http://localhost:${port}`)
);
