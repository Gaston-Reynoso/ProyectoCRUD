import { createBook } from "./src/controllers/logicaNegocio";

const main = async () => {
  const newBook = {
    ISBN: 7891011,
    title: "Mi planta de naranja Lima",
    author: "Jose Mauro de Vasconcelos",
    publishedYear: 1968,
    genre: "Novela",
    available: true,
  };

  //const result = await createBook(newBook);
  //console.log(result);
};

main()