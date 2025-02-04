require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middleware/error-middleware");
const adminRoute = require("./router/admin-router");

const corsOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials: true,
};

app.use(cors(corsOptions)); //middle ware

app.use(express.json());
app.use("/api/auth", router);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

app.use(errorMiddleware);

app.use("/api/admin", adminRoute);


const PORT = 5000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running at port : ${PORT}`);
    });
});
