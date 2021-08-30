

var button = document.querySelector('.btn.check');
var again  = document.querySelector('.btn.again');
var input = document.querySelector('.guess');

let secretNumber = Math.trunc(Math.random()*20 + 1);
var score = 20;
var highscore =  0;
//const message = document.querySelector('.number').textContent = secretNumber;

   function displayMessage(message) {
       document.querySelector('.message').textContent = message;
   }



function print() {
    const value  = Number(input.value);
    input.value = '';
    
    if (!value) {
        displayMessage('⛔ No number');
    }
    
    else
    { 
        
        if (value === secretNumber) {
        document.body.style.backgroundColor = "green";
        document.querySelector('.message').textContent = "🎉 Correct Answer";
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.btn.check').disabled = true;
        document.querySelector('.guess').disabled = true;
        document.querySelector('.guess').style.backgroundColor = 'green';
        document.querySelector('.guess').value = secretNumber;
        document.querySelector('.number').style.width = '300px';
        document.querySelector('.number').style.textAlign = 'center';
        document.querySelector('.number').style.marginBottom = '15px';
        
        
        if(score> highscore){
            highscore = score;
        }
        document.querySelector('.highscore').textContent = highscore;
    }



    else if (value > secretNumber){
        if (score>1) {
            score--;
            document.body.style.backgroundColor = "red";
            document.querySelector('.message').textContent ='📈 Number is to high';
            document.querySelector('.score').textContent = score;   
            
        }
        
        else{
            document.body.style.backgroundColor = "red";
            document.querySelector('.message').textContent = "💣 You Lost the Game";
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.score').textContent = 0;   
            document.querySelector('.highscore').textContent = 0;
        }
        
        
    }
    
    else if (value<secretNumber){
        
        if (score>1) {
            score--;
            document.body.style.backgroundColor = "red";
            document.querySelector('.message').textContent = '📉 Number is to low';
            document.querySelector('.score').textContent = score;      
        }
        else{
            document.body.style.backgroundColor = "red";
            document.querySelector('.message').textContent = "💣 You Lost the Game";
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('.score').textContent = 0;   
            document.querySelector('.highscore').textContent = 0;
        }
        
    }
    
    }
    
}

function refreshPage(){
    window.location.reload();
} 




function refreshPage1() {
    score = 20;
    document.querySelector('.number').style.width = 'fit-content';
    document.querySelector('.number').style.textAlign = 'center';
    document.body.style.backgroundColor = "#222";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.score').textContent = 20; 
    document.querySelector('.highscore').textContent = highscore; 
    document.querySelector('.btn.check').disabled = false;
    document.querySelector('.guess').disabled = false;
    document.querySelector('.guess').style.backgroundColor = '#222';
    document.querySelector('.guess').value = "";
    document.querySelector('.message').textContent ='Start guessing .....';
    secretNumber = Math.trunc(Math.random()*20 + 1);
}

button.addEventListener('click' , print);
again.addEventListener('click',   refreshPage1);
