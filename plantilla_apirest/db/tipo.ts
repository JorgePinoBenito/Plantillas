import mongoose from "mongoose";
import { Tipo } from "../types.ts";

const Schema = mongoose.Schema;

export type TipoModelType = mongoose.Document & Omit<Tipo, "_id">;
export type TipoModelType = mongoose.Document & Tipo;

const TipoSchema = new Schema({
  atributo: { type: String, required: true },
  nombres: { type: [String], required: true },
});

export const TipoModel = mongoose.model<TipoModelType>("Tipo", TipoSchema);
