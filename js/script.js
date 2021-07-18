let answer = document.querySelector('.answer');
let attemts = document.querySelector('.attempts');


function checkNumber() {

    let low = Math.ceil(1);
    let high = Math.floor(10);

    let correct_ans = Math.floor(Math.random() * (high - low + 1 ) + low);
    
    for(let i = 1; i < 4; i++) {
   
        let user_input = parseInt(prompt("Enter a number between 1 and 10"));
            console.log(user_input);
        if(user_input != correct_ans) {
            if(i === 3) {
                alert("YOU LOSE! You do not have anymore chances !!"); 
            } else {
                user_input > correct_ans ? alert("Correct answer is smaller !") : alert("Correct answer is greater !") ;
            }  
        } else {
            alert("CONGRATULATIONS !! You have guessed the number correctly !!!");
            break;
        }

    }
 
}




// console.log(correct_ans);
// console.log(attemts);
