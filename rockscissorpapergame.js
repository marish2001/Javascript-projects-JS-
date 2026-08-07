 let playgame = confirm("Shall we play rock, paper or scissor")
            if(playgame)
        {
            let playerchoice =prompt("Please enter your choice in rock, paper or scissor")
            if(playerchoice)
        {
            let player = playerchoice.trim().toLowerCase()
            if(player==="rock"|| player==="paper" || player==="scissor")
        {
            let computerchoice = Math.floor(Math.random()*3+1)
            let computer = computerchoice=== 1?"rock":computerchoice===2?"paper":"scissor"
            let result = player===computer ?"Tie game!":player==="rock" && computer==="paper"?`player:${player}\ncomputer:${computer}\n Computer wins`
                                                       :player==="paper" && computer==="scissor"?`player:${player}\ncomputer:${computer}\n Computer wins`
                                                       :player==="scissor"&& computer==="rock"?`player:${player}\ncomputer:${computer}\n Computer wins`
                                                       :`player:${player}\ncomputer:${computer}\n Player wins`
           alert(result)
           let playagain = confirm("Play Again the game?")
           playagain? location.reload() : alert("Thanks for playing this game")
        }
        else 
        {
            alert("You didn't enter rock paper or scissor")
        }
        }
        else 
        {
            alert("I guess change your mind. May be next time")
        }
        }
        else 
        {
            alert("Ok may be next time")
        }
