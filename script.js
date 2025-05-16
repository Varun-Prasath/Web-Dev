let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // if there is no input
    if(!guess){
        document.querySelector('.message').textContent = "⛔ No Number!";

        // if the guess is correct
    } else if(guess === secretNumber){
        document.querySelector('.message').textContent = "🎉 Correct number";

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = "#60b347";

        document.querySelector('.number').style.width = '30rem';

        // if the guess is high
    } else if(guess > secretNumber){
        if(score > 1){

            document.querySelector('.message').textContent = "📈 Too High!";
            score--;
            document.querySelector('.score').textContent = score;

        } else{

            document.querySelector('.message').textContent = "💥 You Lost the Game!";

            document.querySelector('.score').textContent = 0;

            // if the guess is low
        }
    } else if(guess < secretNumber){
        if(score > 1){
        document.querySelector('.message').textContent = "📉 Too Low!";
        score--;
        document.querySelector('.score').textContent = score;

        } else{
            document.querySelector('.message').textContent = "💥 You Lost the Game!";
            document.querySelector('.score').textContent = 0;
        }
    }
});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random()*20)+1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
});