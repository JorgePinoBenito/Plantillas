import { GraphQLError } from "graphql";
import { TipoModel, TipoModelType } from "../db/tipo.ts";
import mongoose from "mongoose";

export const Mutation = {
  addTipo: async (
    _: unknown,
    args: { name: string }
  ): Promise<TipoModelType> => {},
  updateTipo: async (
    _: unknown,
    args: { id: string; name: string }
  ): Promise<TipoModelType> => {},
  deleteTipo: async (
    _: unknown,
    args: { id: string }
  ): Promise<TipoModelType> => {},
};
