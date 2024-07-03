import mongoose from "mongoose";
import { Tipo } from "../types.ts";

const Schema = mongoose.Schema;

const TipoSchema = new Schema({
  atributo: { type: String, required: true },
  atributo2: { type: [String], required: true },
  atributo3: { type: Number, required: true },
});

export type TipoModelType = mongoose.Document & Omit<Tipo, "id">;
export type TipoModelType = mongoose.Document &
  Omit<Tipo, "id"> & { atributo3: number };
export type TipoModelType = mongoose.Document & Tipo;

export const TipoModel = mongoose.model<TipoModelType>("Tipo", TipoSchema);
