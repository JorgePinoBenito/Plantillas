type TipoApi = {
  correcto: boolean;
  mensaje: string;
};

export const getTipo = async (
  parametro1: string,
  parametro2: string
): Promise<TipoApi> => {
  const response = await fetch(
    `http://localhost:3000/api/tipo/${parametro1}/${parametro2}`
  );
  return await response.json();
};
