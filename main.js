const items = Array.from(document.querySelectorAll(".section"))
const winnerWord = document.querySelector('.winner_word')
const draw = document.querySelector('.draw')
let count = 0;
let win = 0;
let winnerO = 0;
let winnerX = 0;
const items2 = document.querySelectorAll(".section")
const inners = document.getElementsByClassName('.inners')
let divs = Array.from((document.querySelectorAll("div[class^='section']")));

const humanStep = document.querySelectorAll('.section').forEach(elem=>{
    elem.addEventListener('click',()=>{
        if (!elem.classList.contains('active_circle') && !elem.classList.contains('active')) {
            if (count%2 === 0){
                elem.classList.toggle('active_circle')
                console.log(divs.map(div => div.innerHTML));
                checkWinnerO();
            }
            count++;
        }
        else {
            console.log('выбран элемент с содержимым');
        }
        if (count === 9 && win === 0){
            draw.classList.toggle('active_draw')
        }
    })
})

function winning (items2, player){
      console.log(player);
      if(
        (items2[0] == player && items2[1] == player && items2[2] == player) ||
        (items2[3] == player && items2[4] == player && items2[5] == player) ||
        (items2[6] == player && items2[7] == player && items2[8] == player) ||
        (items2[0] == player && items2[3] == player && items2[6] == player) ||
        (items2[1] == player && items2[4] == player && items2[7] == player) ||
        (items2[2] == player && items2[5] == player && items2[8] == player) ||
        (items2[0] == player && items2[4] == player && items2[8] == player) ||
        (items2[2] == player && items2[4] == player && items2[6] == player)
        ) {
          return true;
          } else {
          return false;
          }
    }
  

function checkWinnerX () {
    if (items[0].classList.contains('active') && items[1].classList.contains('active') && items[2].classList.contains('active')) {
        winnerWord.classList.toggle('active_winner_wordX')
        items[0].classList.toggle('winner_color')
        items[1].classList.toggle('winner_color')
        items[2].classList.toggle('winner_color')
        win++;
    }
    else if (items[3].classList.contains('active') && items[4].classList.contains('active') && items[5].classList.contains('active')) {
        winnerWord.classList.toggle('active_winner_wordX')
        items[3].classList.toggle('winner_color')
        items[4].classList.toggle('winner_color')
        items[5].classList.toggle('winner_color')
        win++;
    }
    else if (items[6].classList.contains('active') && items[7].classList.contains('active') && items[8].classList.contains('active')) {
        winnerWord.classList.toggle('active_winner_wordX')
        items[6].classList.toggle('winner_color')
        items[7].classList.toggle('winner_color')
        items[8].classList.toggle('winner_color')
        win++;
    }
    else if (items[0].classList.contains('active') && items[3].classList.contains('active') && items[6].classList.contains('active')) {
        winnerWord.classList.toggle('active_winner_wordX')
        items[0].classList.toggle('winner_color')
        items[3].classList.toggle('winner_color')
        items[6].classList.toggle('winner_color')
        win++;
    }
    else if (items[1].classList.contains('active') && items[4].classList.contains('active') && items[7].classList.contains('active')) {
        winnerWord.classList.toggle('active_winner_wordX')
        items[1].classList.toggle('winner_color')
        items[4].classList.toggle('winner_color')
        items[7].classList.toggle('winner_color')
        win++;
    }
    else if (items[2].classList.contains('active') && items[5].classList.contains('active') && items[8].classList.contains('active')) {
        winnerWord.classList.toggle('active_winner_wordX')
        items[2].classList.toggle('winner_color')
        items[5].classList.toggle('winner_color')
        items[8].classList.toggle('winner_color')
        win++;
    }
    else if (items[0].classList.contains('active') && items[4].classList.contains('active') && items[8].classList.contains('active')) {
        winnerWord.classList.toggle('active_winner_wordX')
        items[0].classList.toggle('winner_color')
        items[4].classList.toggle('winner_color')
        items[8].classList.toggle('winner_color')
        win++;
    }
    else if (items[2].classList.contains('active') && items[4].classList.contains('active') && items[6].classList.contains('active')) {
        winnerWord.classList.toggle('active_winner_wordX')
        items[2].classList.toggle('winner_color')
        items[4].classList.toggle('winner_color')
        items[6].classList.toggle('winner_color')
        win++;
    }
    if (win === 1 || win === 2){
        for(let i=0;i<9;i++){
            items[i].classList.toggle('active_clear')
            winnerX++;
        }   
    }
}

function checkWinnerO () {
    if (items[0].classList.contains('active_circle') && items[1].classList.contains('active_circle') && items[2].classList.contains('active_circle')) {
        winnerWord.classList.toggle('active_winner_wordY')
        items[0].classList.toggle('winner_color')
        items[1].classList.toggle('winner_color')
        items[2].classList.toggle('winner_color')
        win++;
    }
    else if (items[3].classList.contains('active_circle') && items[4].classList.contains('active_circle') && items[5].classList.contains('active_circle')) {
        winnerWord.classList.toggle('active_winner_wordY')
        items[3].classList.toggle('winner_color')
        items[4].classList.toggle('winner_color')
        items[5].classList.toggle('winner_color')
        win++;
    }
    else if (items[6].classList.contains('active_circle') && items[7].classList.contains('active_circle') && items[8].classList.contains('active_circle')) {
        winnerWord.classList.toggle('active_winner_wordY')
        items[6].classList.toggle('winner_color')
        items[7].classList.toggle('winner_color')
        items[8].classList.toggle('winner_color')
        win++;
    }
    else if (items[0].classList.contains('active_circle') && items[3].classList.contains('active_circle') && items[6].classList.contains('active_circle')) {
        winnerWord.classList.toggle('active_winner_wordY')
        items[0].classList.toggle('winner_color')
        items[3].classList.toggle('winner_color')
        items[6].classList.toggle('winner_color')
        win++;
    }
    else if (items[1].classList.contains('active_circle') && items[4].classList.contains('active_circle') && items[7].classList.contains('active_circle')) {
        winnerWord.classList.toggle('active_winner_wordY')
        items[1].classList.toggle('winner_color')
        items[4].classList.toggle('winner_color')
        items[7].classList.toggle('winner_color')
        win++;
    }
    else if (items[2].classList.contains('active_circle') && items[5].classList.contains('active_circle') && items[8].classList.contains('active_circle')) {
        winnerWord.classList.toggle('active_winner_wordY')
        items[2].classList.toggle('winner_color')
        items[5].classList.toggle('winner_color')
        items[8].classList.toggle('winner_color')
        win++;
    }
    else if (items[0].classList.contains('active_circle') && items[4].classList.contains('active_circle') && items[8].classList.contains('active_circle')) {
        winnerWord.classList.toggle('active_winner_wordY')
        items[0].classList.toggle('winner_color')
        items[4].classList.toggle('winner_color')
        items[8].classList.toggle('winner_color')
        win++;
    }
    else if (items[2].classList.contains('active_circle') && items[4].classList.contains('active_circle') && items[6].classList.contains('active_circle')) {
        winnerWord.classList.toggle('active_winner_wordY')
        items[2].classList.toggle('winner_color')
        items[4].classList.toggle('winner_color')
        items[6].classList.toggle('winner_color')
        win++;
    }
    if (win === 1 || win === 2){
        for(let i=0;i<9;i++){
            items[i].classList.toggle('active_clear')
        }   
        winnerO++;
    }
    else {
        stepComp();
    }        
}

const refreshButton = document.querySelector('.refresh_button').addEventListener('click',()=>{
        setTimeout(function(){
            location.reload();
        }, 100);
    })
    
function stepComp (){    
        let randomN = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
        if (items[randomN].classList.contains('active') === false && items[randomN].classList.contains('active_circle') === false){ 
            setTimeout(() => {
                items[randomN].classList.toggle('active')
                checkWinnerX();
            }, 0);
            count++;  
        } 
        else if(count < 8){
            stepComp();   
        }  
    } 