/*  ### Buscando e contanto dados em Arrays

    Baseado no Array de livros por Categoria abaixo, faça os seguintes deasfios:

    * Contar o número de categorias e o número de livros em cada categoria;
    * Contar o número de autores;
    * Mostrar livros de autor Augusto Cury;
    * Transformar a função acima em uma função que irá receber o nome do autor e
      devolver os livros desse autor.
*/

const booksCategory = [
  {
    category: "Riqueza",

    books: [
      {
        title: "Os segredos da mente milionária",
        author: "T. Harv Eker",
      },
      {
        title: "O homem mais rico da Babilônia",
        author: "George S. Clason",
      },
      {
        title: "Pai rico, pai pobre",
        author: "Robert T. Kiyosaki e Sharon L. Lechter",
      },
    ],
  },
  {
    category: "Inteligência Emocional",

    books: [
      {
        title: "Você é Insubstituível",
        author: "Augusto Cury",
      },
      {
        title: "Ansiedade - Como enfrentar o mal do século",
        author: "Augusto Cury",
      },
      {
        title: "Os 7 hábitos das pessoas altamente eeficazes",
        author: "Stephen R. Covey",
      },
    ],
  },
];

const totalCategories = booksCategory.length;

console.log(totalCategories)
for (let category of booksCategory) {
  console.log("total de livros da categoria: ", category.category);
  console.log(category.books.length);
}

function countAuthors() {
  let authors = []

  for(let category of booksCategory) {
    for (let book of category.books) {
      if(authors.indexOf(book.author) == -1) {
        authors.push(book.author)
      }
    }
  }

  console.log('Total de autores: ', authors.length)
}

countAuthors();

function booksOfAuthor(author) {
  let books = [];

  for (let category of booksCategory) {
    for (let book of category.books) {
      if (book.author === author) {
        books.push(book.title);
      }
    }
  }

  console.log(`Lisvros do ${author}: ${books.join(', ')}`);
}

booksOfAuthor("Augusto Cury");
booksOfAuthor("George S. Clason");
