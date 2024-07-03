import { GraphQLError } from "graphql";
import { TipoModel, TipoModelType } from "../db/tipo.ts";
import { getTipo } from "../lib/apifunction";

export const Query = {
  getTipos: async () => {},

  getTipo: async (_: unknown, args: { id: string }) => {},
};
