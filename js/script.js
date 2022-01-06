const hero = document.getElementById("player")
const playArea = document.querySelector("#main-play-area")


// movimento e tiro
function flyShip(){
    if(event.key==='ArrowUp'){
        event.preventDefault()
        moveUp()
    }else if(event.key === 'ArrowDown'){
        event.preventDefault()
        moveDown()
    }else if(event.key === " "){
        event.preventDefault()
        fireLaser()
    }
}

//função de subir

function moveUp(){
    
    let topPosition=getComputedStyle(hero).getPropertyValue("top")
    
    
   if( topPosition=== "0px"){
     return
    } else {
      let position = parseInt(topPosition)
          position -= 10
          hero.style.top = `${position}px`

   }
}

//função descer
function moveDown(){
    let topPosition=getComputedStyle(hero).getPropertyValue("top")
    
    if(topPosition === "530px"){
        return
    }else{
        let position =parseInt(topPosition)
        position += 10
        
        hero.style.top=position=`${position}px`
    }
}

window.addEventListener("keydown", flyShip)