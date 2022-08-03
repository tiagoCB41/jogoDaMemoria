const cards = document.querySelectorAll('.memory-card');

let cartasViradas = 0
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let partidas = sessionStorage.getItem("partidas")
if(partidas == null){
  partidas = 1
}
sessionStorage.setItem("partidas", (partidas))

let nome = "" 
 nome = sessionStorage.getItem("nome")
console.log(nome)
if(nome == null){
nome = prompt("Qual o seu nome jogador?")

while( nome.length <= 0 ){
  nome = prompt("Digite um nome válido. \nQual o seu nome jogador?")
}
nome = nome.charAt(0).toUpperCase() + nome.slice(1);
sessionStorage.setItem("nome", nome)
}

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;
  this.classList.add('flip')
  
  if (!hasFlippedCard) {
    hasFlippedCard = true
    firstCard = this
    
    return;
  }
  secondCard = this;
  
  
  
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
 isMatch ? disableCards() : unflipCards();
 if(isMatch){
  cartasViradas += 2
  console.log(cartasViradas)
}
 
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);
  resetBoard();
}

function unflipCards() {
  lockBoard = true;
  
  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');
    resetBoard()
  }, 1500);
  
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function newGame(){
  if(cartasViradas > 5){
  partidas ++
  sessionStorage.setItem("partidas", (partidas))
  location.reload();
}else{alert("Termine a partida primeiro, para depois embaralhar.")}
  
}


cards.forEach(card => card.addEventListener('click', flipCard));