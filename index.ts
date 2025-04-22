import { createBook, getBooks, getBookById, updateBook, deleteBook } from "./src/controllers/logicaNegocio";


const main = async () => {

  let response;
  
  let action = "";  //AQUI PONEMOS LA ACCION A REALIZAR
  let id = "";
  //ISBN: 4564656, title:"Mi Planta de Naranja Lima", author:"Jose Vasconcelos", publishedYear: 1968, genre:"Novela"
  let newBook = {};
  let body = {title:" "};



  switch (action) {
    case "getBooks":
      response = await getBooks()
      break
    case "getBookById":
      response = await getBookById(id)
      break
    case "createBook":
      response = await createBook(newBook)
      break
    case "updateBook":
      response = await updateBook(id, body)
      break
    case "deleteBook":
      response = await deleteBook(id)
      break
    default:
      response = { error: "Acción no valida..." }
  }

  console.log(response)

};

main()