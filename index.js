// Number Guessing Game

const minimum = 1;
const maximum = 100;
const answer = Math.floor(math.random() * (maximum - minimum + 1)) + minimum;

let attempts = 0;
let guess;
let running = true;

while(running){

    guess = window.prompt(`guess a number between ${minimum} and ${maximum}`);
    guess = Number(guess);

    if(isNaN(guess)){
        window.alert(`please enter valid number`);
    }
    else if(guess < minimum ||guess > maximum){
        window.alert(`please enter a valid number`);
    }
    else{
        attempts++;
        if (guess < answer){
            window.alert(`Too Low!!! Try again`);
        }
        else if(guess > answer){
            window.alert(`Too High!!! Try again`);
        }
        else{
            window.alert(`Congratulations! You got it Buddy!!! The answer was ${answer}. It took you ${attempts} attempts`);
            return false; 
        }
    } 
}