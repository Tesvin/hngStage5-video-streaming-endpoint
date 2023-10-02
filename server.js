import express from "express";
import cors from "cors";
import morgan from "morgan";
import router from "./routes/videoRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import 'dotenv/config'

const app = express()

const port = process.env.PORT 

// Third-party middlewares
app.use(cors());
app.use(morgan("dev"));

// In-built middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));


// custom middlewares
app.use("/api", router);
app.use(errorHandler);


app.get('/', (req, res) => {
    res.send('welcome home')
})


app.listen(port, () => {
    console.log(`server connected to https://localhost:${port}`)
})