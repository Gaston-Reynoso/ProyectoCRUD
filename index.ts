import { createBook } from "./src/controllers/logicaNegocio";

const main = async () => {
  const newBook = {
    ISBN: 123456,
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    publishedYear: 1943,
    genre: "Fábula",
    available: true,
  };

  const result = await createBook(newBook);
  console.log(result);
};

main()