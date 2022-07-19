console.log('działa');

let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById('user-result');
const computerScore_span = document.getElementById('computer-result');
const tl_div = document.getElementById('tl');
const tm_div = document.getElementById('tm');
const tr_div = document.getElementById('tr');
const bl_div = document.getElementById('bl');
const bm_div = document.getElementById('bm');
const br_div = document.getElementById('br');
const message = document.getElementById('message');

function getComputerChoice() {
    possibleChoices = ['tl', 'tm', 'tr', 'bl', 'bm', 'br'];
    const randomNumber = Math.floor(Math.random() * 5);
    return possibleChoices[randomNumber];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    if (userChoice === computerChoice) {
        lost();
    } else {
        win();
    }
}

function win() {
    userScore++;
    userScore_span.innerHTML = userScore;
    message.innerHTML = 'Udało ci się pokonać bramkarza!';
    message.classList.add('succes');
    setTimeout(function() {
        message.classList.remove('succes');
        message.innerHTML = '';
    }, 2000);
}


function lost() {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    message.innerHTML = 'Przestrzeliłeś ten rzut karny, bramkarz obronił!!';
    message.classList.add('fail');
    setTimeout(function() {
        message.classList.remove('fail');
        message.innerHTML = '';
    }, 2000);
}

function main() {
    tl_div.addEventListener('click', function() {
        game('tl');
    })
    tm_div.addEventListener('click', function() {
        game('tm');
    })
    tr_div.addEventListener('click', function() {
        game('tr');
    })
    bl_div.addEventListener('click', function() {
        game('bl');
    })
    bm_div.addEventListener('click', function() {
        game('bm');
    })
    br_div.addEventListener('click', function() {
        game('br');
    })
};

main();