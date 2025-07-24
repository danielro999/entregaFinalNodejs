import express, { json } from "express";
import productRousters from "./src/routes/products.router.js";
import authRouter from "./src/routes/auth.routes.js"
import { auth } from "./src/middleware/auth.middelware.js";
import raiz from "./src/routes/raiz.routes.js"

const app = express();
const PORT = 3000;

app.use(express.json())

app.use(raiz)

app.use('/api', auth ,productRousters);

app.use(authRouter)

app.use((req, res, next)=> res.status(404).json({error: "no found"}))

app.listen(PORT, ()=> console.log("server up!!"))