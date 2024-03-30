const sprite = document.querySelector("#sprite");
const blocks = [];

// creazione blocchi

for (let i = 0; i < 5; i++) {
    // blocco da ripetere n volte
    // creiamo una varaiabile el blockElem

    const blockElem = document.createElement("div");
    blockElem.classList = "block";

    // creiamo una variabile top math random usando window.innerHeight
    const topC = Math.floor(Math.random() * (window.innerHeight / 50)) * 50;

    // creaiamo una variabile left con math random usando window.innerWidth
    
    const leftC = Math.floor(Math.random() * (window.innerWidth / 50)) * 50;

    // assegnamo le coordinate al nostro elemento

    blockElem.style.top = topC + "px";

    blockElem.style.left = leftC + "px"; 
    
    // inseriamo il nuovo elemento nel body

    document.querySelector("body").append(blockElem);

    blocks.push(blockElem);
}


// Evento movimento tastiera

document.addEventListener("keydown" , function(e) {

    console.log("Tasto premuto:", e.code)

    if (e.code === "ArrowDown") {
        sprite.style.top = sprite.offsetTop + 50 + "px";
    }

    if (e.code === "ArrowUp") {
        sprite.style.top = sprite.offsetTop - 50 + "px";
    }

    if (e.code === "ArrowRight") {
        sprite.style.left = sprite.offsetLeft + 50 + "px";
    }
    
    if (e.code === "ArrowLeft") {
        sprite.style.left = sprite.offsetLeft - 50 + "px";
    }


    // Collisioni
// Controlliamo se la posizione corrente dello sprite collide con uno
// dei blocchi

// Nuova variabile

const spriteCoord = sprite.getBoundingClientRect();

console.log(spriteCoord.left, spriteCoord.top);

for (let i = 0; i < blocks.length; i++) {
    const blockCoord = blocks[i].getBoundingClientRect();

    if (spriteCoord.left === blockCoord.left && spriteCoord.top === blockCoord.top ) {
        console.warn("hit");
        blocks[i].remove();
    }
}

});


