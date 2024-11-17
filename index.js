// Simple Small Project
// Counter Program

const decreaseBtn = document.getElementById(`btndecrease`);
const increaseBtn = document.getElementById(`btnincrease`);
const resetBtn = document.getElementById(`btnreset`);
const countLabel = document.getElementById(`countLabel`);
let count = 0;

increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}