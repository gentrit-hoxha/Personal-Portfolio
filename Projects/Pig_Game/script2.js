'use strict';

/*This script is implemented after the script.js the original one
so it is done 95% without looking the original code+*/


const score0El   = document.querySelector('#score--0');
const score1El   = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const dice       = document.querySelector('.dice');

const winner0 = document.querySelector('.winner--0');
const winner1 = document.querySelector('.winner--1');

const playerO  = document.querySelector('.player--0');
const player1  = document.querySelector('.player--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
  


btnRoll.addEventListener('click' , rollTHeDice);
btnHold.addEventListener('click' , holdTHeScore);
btnNew.addEventListener('click' , newGame);

dice.classList.add('hidden');
winner0.classList.add('hidden');
winner1.classList.add('hidden');

let currentScore = 0;
let activePlayer = 0;
let scores = [0,0]



function switchPlayer() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
       if (activePlayer===0) {
        activePlayer=1
       } else {
        activePlayer=0;
       }

   playerO.classList.toggle('player--active');
   player1.classList.toggle('player--active');
    
}




function  rollTHeDice() {
   const diceNum = Math.ceil(Math.random()*6);
   dice.classList.remove('hidden');
   dice.src = `dice-${diceNum}.png`;

   
   if (diceNum !==1) {
       currentScore =currentScore + diceNum;
       document.getElementById(`current--${activePlayer}`).textContent = currentScore;

   }

   else { 
       switchPlayer();
   }

}


function holdTHeScore() {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];


    if (scores[activePlayer] >=10) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
  
        document.querySelector(`.winner--${activePlayer}`).classList.remove('hidden');
    
    } else {
        switchPlayer();
    }

}

   function newGame() {
       currentScore = 0;
       activePlayer = 0;
       scores[0] = 0;
       scores[1] = 0;


       current0El.textContent = 0;
       current1El.textContent = 0;
   
      score0El.textContent = 0;
      score1El.textContent = 0;
   
      playerO.classList.remove('player--winner');
      player1.classList.remove('player--winner');
      
      
      playerO.classList.add('player--active');
      player1.classList.remove('player--active');

    winner0.classList.add('hidden');
    winner1.classList.add('hidden');

     


    }

