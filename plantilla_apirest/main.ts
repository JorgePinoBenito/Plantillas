// @deno-types="npm:@types/express@4"
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import { deleteTipo } from "./resolvers/delete.ts";
import { getTipo, getTipos } from "./resolvers/get.ts";
import { addTipo } from "./resolvers/add.ts";
import { updateTipo } from "./resolvers/update.ts";

const MONGO_URL = Deno.env.get("MONGO_URL");

if (!MONGO_URL) {
  throw new Error("Please provide a MongoDB connection string");
}

await mongoose.connect(MONGO_URL);
const app = express();
app.use(express.json());
app
  .get("/api/contactos", getTipos)
  .get("/api/contactos/:dni", getTipo)
  .post("/api/contactos", addTipo)
  .put("/api/contactos/:dni/:nombre", updateTipo)
  .delete("/api/contactos/:dni", deleteTipo);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
