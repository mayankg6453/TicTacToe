let boxes = document.querySelectorAll(".box");
let resetButton = document.querySelector("#reset-button");
let newGameButton = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true// player x and player o

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

resetButton.addEventListener("click",()=>{
    resetGame();
});
newGameButton.addEventListener("click",()=>{
    resetGame();
});
let clickCount=0;
let isWinnerFound = false;
boxes.forEach( (box) => {
    box.addEventListener("click",() =>{
        // console.log('box clicked');
        clickCount++;
        if(turnO){
            box.innerText = "O";
            turnO = false;

        }else{
            box.innerText = "X";
            turnO =true;

        }
        box.disabled = true;
        checkWinner();
        if(clickCount==9){
            if(!isWinnerFound){
                msg.innerText = `Game Draw`;
                msgContainer.classList.remove("hide");
                disableBoxes();
            }
        }
    });
});
const resetGame = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
    msgContainer.classList.add("hide");
    turnO = true;
    clickCount = 0;
    isWinnerFound = false;
};

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
};




const showWinner =(winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}
const checkWinner = ()=>{
    for (let pattern of winPattern){
        let text1 = boxes[pattern[0]].innerText;
        let text2 = boxes[pattern[1]].innerText;
        let text3 = boxes[pattern[2]].innerText;
        if(text1!="" && text2!="" && text3 !=""){
            if(text1 === text2 && text2 === text3){
                // console.log(text1, " is the winner");
                showWinner(text1);
                isWinnerFound = true;
            }
        }
        

    }
}

