// Define Ui eliments
let initiate = document.querySelector('.btn');

// Add event listener
initiate.addEventListener('click', option);

// Define function
function option() {
    let low = 1;
    let high = 10;

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    correcr_ans = (getRandomInt(low, high));
    console.log(correcr_ans);
    for (let i = 0; i < 3; i++) {
        guessNum = prompt('Guess A Number : ');
        selectNum = parseInt(guessNum);
        let numCon = isNaN(selectNum);
        if (numCon) {
            alert('Not A Number! and You loss a Chance! ');
        } else {
            if (correcr_ans == selectNum) {
                alert('You win');
                break;
            } else if (correcr_ans > selectNum) {
                alert('Correct answer is greater!');
            } else if (correcr_ans < selectNum) {
                alert('Correct answer is smaller!');
            }
        }
    }
    if (selectNum != correcr_ans) {
        alert('You lose!');
    }
}