const hero = document.getElementById("player")
const playArea = document.getElementById("main-play-area")


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


    //funcionalidade de tiro
    function fireLaser () {
        let laser = createLaserElement()
        playArea.appendChild(laser)
        moveLaser(laser)
        
    }

    function createLaserElement () {
        let xPosition = parseInt(window.getComputedStyle(hero).getPropertyPriority('left'))
        
        let yPosition = parseInt(window.getComputedStyle(hero).getPropertyPriority('top'))
        
        let newLaser = document.createElement('img')
        newLaser.src = 'img/shot.png'
        newLaser.classList.add('laser')
        newLaser.style.left = `${xPosition}px`
        newLaser.style.top = `${yPosition -10 }px`
        return newLaser
    }

    function moveLaser (laser) {
        let laserInterval = setInterval(() => {
            let xPosition = parseInt(laser.style.left)
            
            if(xPosition === 540){
                laser.remove()
            }else{
                laser.style.left = `${xPosition +8 }px`
            }
        },10 );

        
    }
window.addEventListener("keydown", flyShip)