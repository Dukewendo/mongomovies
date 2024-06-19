import express from "express"
import cors from "cors"
import movies from "./api/movies.route.js"


const app = express()

app.use(cors())
app.use(express.json())


app.use("/api/v1/movies/", movies)
app.use ("*", (req,res)=> {
    res.status(404).json({error: "not found"})
})

export default app

// npx nodemon server.js   (in same folder)
//localhost:5000/api/va/movies

// https://eu-west-2.aws.data.mongodb-api.com/app/data-gfxihfu/endpoint/data/v1
