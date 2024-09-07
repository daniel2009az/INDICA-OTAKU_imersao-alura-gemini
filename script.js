// import { } from './dados.js';
const categorias = [
  "Ação",
  "Aventura",
  "Fantasia",
  "Comédia",
  "Drama",
  "Slice of Life",
  "Esporte",
  "Sobrenatural",
  "Romance",
  "Ficção Científica",
  "Horror",
  "Shoujo",
  "Culinária",
  "Harem",
  "Suspense",
  "Histórico",
  "Mecha",
  "Mistério",
  "Psicológico",
  "Shounen",
  "Seinen",
  "Magia",
  "Musical",
  "Cultivação",
  "Artes Marciais",
  "Isekai",
];

function addCategorias() {
  const categoriasDiv = document.getElementById("categorias");
  for (categoria of categorias) {
    const button = document.createElement("button");
    button.innerHTML = categoria;
    button.classList.add("categoria");
    button.onclick = function () {
      // Adicionar a classe 'active' ao botão clicado e remover de outros
      const buttons = document.querySelectorAll(".categoria");
      buttons.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");
    };
    categoriasDiv.appendChild(button);
  }
}
addCategorias();

function indicar() {
  document.querySelector(".resultado").innerHTML = "" 
  const categoria = document.querySelector(".categoria.active");
  if (categoria) {
    // alert(`Indicando anime de ${categoria.innerText}`)
    let resultado = [];
    let newManga = [];
    for (manga of mangas) {
        if(manga.genero.includes(categoria.innerText)){
            newManga.push(manga);
        }
    }
    for(let i = 0; i < 2; i++){
        let random = Math.floor(Math.random() * newManga.length)
        card = document.createElement("div");
        card.classList.add("card");
        url = `https://www.google.com/search?q=ler+${encodeURI((newManga[random].titulo.replace(" ", "+")))  }`
        card.innerHTML = `<h2><a href ="${url}">${newManga[random].titulo}</a></h2>  <h3>Genero: ${newManga[random].genero}</h3> <p>${newManga[random].descricao}</p>  <p>Autor: ${newManga[random].autor}</p>`;
        console.log(newManga[random]);  
        document.querySelector(".resultado").appendChild(card)
    }
    console.log(resultado);
}else{alert("Selecione uma categoria")}
  }


  function pesquisar (){
    document.querySelector(".resultado").innerHTML = ""
    let texto = document.getElementById("pesquisa-input").value
    texto = texto.toLowerCase()
    console.log(texto)
    let url = ''
    for(manga of mangas){
        if(manga.titulo.toLowerCase().includes(texto)  || manga.autor.toLowerCase().includes(texto) || manga.genero.toLowerCase().includes(texto) || manga.descricao.toLowerCase().includes(texto)){
          url = `https://www.google.com/search?q=ler+${encodeURI((manga.titulo.replace(" ", "+")))  }`
          card = document.createElement("div");
          card.classList.add("card");
          card.innerHTML = `<h2><a href="${url}">${manga.titulo}</a></h2> <h3>Genero: ${manga.genero}</h3> <p>${manga.descricao}</p>  <p>Autor: ${manga.autor}</p>`;
          document.querySelector(".resultado").appendChild(card)
        }
    }


  }

