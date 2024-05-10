let imagesdice = ["Images/1stDice.png", "Images/2ndDice.png", "Images/3rdDice.png", "Images/4thDice.png", "Images/5thDice.png", "Images/6thDice.png"]
let diceimage = document.getElementById('diceimg')
let diceimage2 = document.getElementById('diceimg2')
let wintext = document.getElementById('winh1')
let rollbutton = document.getElementById('rollbut')
let scoretext = document.getElementById('score')
let score = 0;

function rolldice () {
    let random = Math.floor(Math.random()*6)
    let random2 = Math.floor(Math.random()*6)
    wintext.innerText = 'Match both dice to win!'
    wintext.style.color = "#ffffff";
    rollbutton.innerText = 'Reroll'
    diceimage.src = imagesdice[random]
    diceimage2.src = imagesdice[random2]
    rollbutton.style.background = "#0080ff";
    wintext.classList.remove("animate__tada");
    diceimage.classList.add("animate__shakeY");
    diceimage2.classList.add("animate__shakeY");
    setTimeout(() => { diceimage.classList.remove("animate__shakeY"); }, 500);
    setTimeout(() => { diceimage2.classList.remove("animate__shakeY"); }, 500);


    if (diceimage.src == diceimage2.src){
        wintext.innerText = 'YOU WIN!'
        wintext.classList.add("animate__tada");
        wintext.style.color = "#15ff00";
        rollbutton.innerText = 'Restart';
        rollbutton.style.background = "#00bb10";
        score++
        scoretext.innerText = score;
    }
}