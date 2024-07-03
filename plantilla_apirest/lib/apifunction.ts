export type Tipo = {
  atributo: string;
};

const getEjemplo = async (
  parametro1: string,
  parametro2: string
): Promise<Tipo> => {
  return { atributo: "valor" };
};

export default getEjemplo;
