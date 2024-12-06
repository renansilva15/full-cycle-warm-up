import Fastify from "fastify";
import mongoose from "mongoose";

function connectDb(url = "mongodb://mongo:27017/test") {
  try {
    const db = mongoose.connect(url)

    console.log("Connected to DB");

    return db
  } catch (error) {
    console.error('Could not connect to DB', error);

  }
}

function healthCheck(req, res) {
  return res.code(200).send({ status: "Ok" })
}

connectDb()

const app = Fastify({ logger: true })

app.get("/", healthCheck)

app.listen({ host: "0.0.0.0", port: 3333 }, () => {
  console.log("Server running at http://localhost:3333");
})
