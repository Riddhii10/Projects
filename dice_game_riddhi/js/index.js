let Name1=""
let Name2=""
let score1=0
let score2=0
let total=0

function firstClick(click){
    click.preventDefault()
    const data=document.getElementsByTagName("input")
    Name1=data[0].value
    Name2=data[1].value
    total=data[2].value
    document.getElementById("form-container").style.display="none"
    document.getElementById("board-container").style.display="block"
    document.getElementById("player1").getElementsByTagName("h1")[0]=Name1
    document.getElementById("player2").getElementsByTagName("h1")[0]=Name2
}

function roll(player_no){
    const num=Math.floor((Math.random()*6)+1)
    const playerDetails=document.getElementById(`player${player_no}`)
    playerDetails.querySelector(".dice-image img").setAttribute("src",`../images/dice1 (${num}).png`)
    switch(player_no){
        case 1:
            score1=score1+num
            playerDetails.getElementsByClassName("score")[0].innerHTML=score1
            playerDetails.getElementsByTagName("input")[0].setAttribute("disabled",true)
            document.getElementById("player2").getElementByTagName("input").removeAttribute( "disabled");
            break
        case 2:
            score2=score2+num
            playerDetails.getElementsByClassName("score")[0].innerHTML=score2
            playerDetails.getElementsByTagName("input")[0].setAttribute("disabled",true)
            document.getElementById("player1").getElementByTagName("input").removeAttribute( "disabled");
            break
        default:
            break
    }

    if (score1>=total){
        document.getElementById("player1").innerHTML+=`<div id="winner"></div>`
        document.getElementById("player2").getElementByTagName("input").setAttribute("disabled",true)
    }
    if(score2>=total){
        document.getElementById("player2").innerHTML+=`<div id="winner"></div>`
        document.getElementById("player1").getElementByTagName("input").setAttribute("disabled",true)
    }

}