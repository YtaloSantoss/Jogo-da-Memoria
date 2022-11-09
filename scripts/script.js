const FRONT = "card_front"
const BACK = "card_back"
const CARD = "card"
const ICON = "icon"




startGame();

function startGame() {
    initializeCards(game.createCardsFromTechs());
}

function initializeCards(cards){
    let gameBoard = document.getElementById("gameBoard");

    game.cards.forEach(card => {

        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);

    })

}

function createCardContent(card, cardElement){
    creatCardFace(FRONT,card, cardElement);
    creatCardFace(BACK,card, cardElement);
}

function creatCardFace(face, card, element) {

    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);
    if (face === FRONT){
        let iconElement = document.createElement('img');
        iconElement.classList.add(ICON);
        iconElement.src = "./images/" + card.icon + ".png";
        cardElementFace.appendChild(iconElement)
    }else{
        cardElementFace.innerHTML =  "&lt/&gt";
    }
    element.appendChild(cardElementFace);
}


function createCardsFromTechs(techs) {

    let cards = [];
// isso tudo ta sendo adcionado em tech e em tech ta sendo adcionado cada elemento pelo of de techs, depois tudo vai pra cards
    for (let tech of techs) {
        cards.push(createPairFromTech(tech));
    }
    
    return  cards.flatMap(pair => pair)
}

function createPairFromTech(tech) {

    return [{
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,
    }, {
        id: createIdWithTech(tech),
        icon: tech,
        flipped: false,
    }]
}

function createIdWithTech(tech){
    return tech + parseInt(Math.random() * 1000);
}

function flipCard(){

    this.classList.add("flip")
}