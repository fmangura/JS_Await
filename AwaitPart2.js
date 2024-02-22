async function pickCard() {
    try {
        let card = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
        console.log(card.data)
        console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit}`)
    }catch(err){
        console.log(err)}
}

async function pick2Cards() {
    try {
    let card = await axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
        console.log(card.data)
        console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit}`)

    let card2 = await axios.get(`https://deckofcardsapi.com/api/deck/${card.data.deck_id}/draw/?count=1`)
        console.log(card2.data)
        console.log(`${card2.data.cards[0].value} of ${card2.data.cards[0].suit}`)

    } catch(err) {
        console.log(err)
    }
}

let currDeck;

async function drawCard(){
    try {
    let card = await axios.get(`https://deckofcardsapi.com/api/deck/${currDeck}/draw/?count=1`)
        console.log(card.data)
        console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit}`)
        return card

    } catch(err) {
        newDeck()}
};

async function newDeck(){
    try {
    let deck = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
    currDeck = deck.data.deck_id

    } catch(err) {
        console.log(err)}
}
let ranDegree = Math.floor(Math.random()*180)

$(document).ready(function(){
    newDeck()
});

$('.drawCard').on('click', async function(e){
    e.preventDefault()
    let card = await axios.get(`https://deckofcardsapi.com/api/deck/${currDeck}/draw/?count=1`)
    .then(card => {
        console.log(card.data)
        console.log(`${card.data.cards[0].value} of ${card.data.cards[0].suit}`)
        $('.CardPile').append(`<li><img src='${card.data.cards[0].image}' style='transform: rotate(${Math.floor(Math.random()*45) * (Math.round(Math.random()) ? 1 : -1)}deg) translateX(${Math.floor(Math.random()*90)}px)'></li>`)
    })
    .catch(err => {
        $('.CardPile').empty()
        newDeck()
    })
});