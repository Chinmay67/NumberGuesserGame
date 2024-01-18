let number=parseInt(Math.random()*100+1)

const guessfield=document.querySelector("#guessfield")
const guesslist=document.querySelector(".guesslist")
const remaining=document.querySelector(".guessleft")
const submit=document.querySelector(".subt")
const result=document.querySelector(".startover")
const newg=document.querySelector(".newgame")

let guesses=[];
let count=1;

let playgame=true;
if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess=parseInt(guessfield.value)
        validateguess(guess)
    })
}
function validateguess(guess){
    if(guess<0 || isNaN(guess)||guess>100){
        alert("please enter a valid number between 1-100")
    }else{
        
        if(count===11){
            displayguess(guess)
            displaymessage(`Game Over , The number was ${number}`)
            endgame();
        }
        else{
            displayguess(guess)
            checkguess(guess)
        }
    }
    guessfield.value=''
}
function checkguess(guess){
    if(guess===number){
        displaymessage(`Your guess was correct`)
        endgame();
    }
    else if(guess>number){
        displaymessage(`Your guess is too high`)
    }
    else{
        displaymessage(`Your guess was too low`)
    }
}
function displaymessage(guess){
    result.innerHTML=`${guess}`
}
function displayguess(guess){
    guesses.push(guess)
    guesslist.innerHTML=`${guesses}`
    count+=1;
    remaining.innerHTML=`${11-count}`

}
const p=document.createElement('p')
function endgame(){
    guessfield.value=''
    guessfield.setAttribute("disabled",'')
    
    p.innerHTML= `<h2 id ="newgame1">Start new game</h2>`
    newg.appendChild(p)
    playgame=false;
    newgame();
    
}
function newgame(){
    const newgamebutton=document.querySelector("#newgame1")
    newgamebutton.addEventListener('click',function(e){
        
        
        number=parseInt(Math.random()*100+1)
        count=1;
        guesses=[]
        guessfield.removeAttribute('disabled')
        remaining.innerHTML=`${11-count}`
        guesslist.innerHTML=''
        result.innerHTML=''
        p.innerHTML=''
        playgame=true;

        


    });
}
