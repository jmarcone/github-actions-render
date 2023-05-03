import { Express} from "express";

const app = Express();

app.get("*", (req,res) => {
    res.send("<h1>Hello World!</h1>")
})

app.listen(80, () => console.log("server started"))