let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () =>{
    const options = ["rock","paper","scissor"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
}

const drawgame = () => {
    // console.log("the game was draw.");
    msg.innerText = "the game was draw.";
    msg.style.backgroundColor = "#081b31";
}

const showwinner = (userwin,userchoice,compchoice) => {
    if(userwin){
        // console.log("you win!");
        userscore++;
        userscorepara.innerText = userscore;
        msg.innerText = `you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        // console.log("you lose");
        compscore++;
        compscorepara.innerText = compscore;
        msg.innerText = `you lost.${compchoice} beats  your ${userchoice} `;
        msg.style.backgroundColor = "red";
    }
}

const playgame = (userchoice) =>{
    // console.log("user choice = ",userchoice)
    const compchoice = gencompchoice();
    // console.log("computer choice = ",compchoice);

    if(userchoice === compchoice){
        drawgame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            // paper,scissor
            userwin = compchoice === "paper" ? false : true;
        }
        else if(userchoice === "paper"){
            // rock,scissor
            userwin = compchoice === "scissor" ? false : true;
        }
        else{
            //rock,paper
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
}

choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click",() =>{
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
    });
});