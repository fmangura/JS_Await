async function getRandomFact(number) {
    try {
        let numberFact = await axios.get(`http://numbersapi.com/${number}/trivia?json`)
            return console.log(numberFact.data);
    }catch(err){
        return console.log('Error', err);
    }
}

async function RandomNumRandomFact(repeats) {
    let answer = [];

    for (i=0; i < repeats; i++){
        answer.push(axios.get(`http://numbersapi.com/random/trivia?json`))
    }

    let all = await Promise.all(answer);
    for (i=0; i < all.length; i++) {
        console.log(all[i].data)
    }
}

async function FaveNumFact(fave) {
    let answer = [];

    for (i=0; i < 4; i++){
        answer.push(axios.get(`http://numbersapi.com/${fave}/trivia?json`))
    }

    let all = await Promise.all(answer);
    
    for (i=0; i < answer.length; i++) {
        console.log(all[i].data);
    }
}
