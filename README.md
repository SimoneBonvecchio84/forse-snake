# SNAKE

1. Selezione dell'elemento sprite e inizializzazione dell'array 
    
    Viene selezionato l elemeto sprite dal documento HTML e assegnato(ricorda questo verbo)   alla     variabile sprite appena creata nel documento js.

2. Creazione dei blocck tramite ciclo for

     Vine utilizzato un ciclo for per creare 5 blocchi. 
     
     Dentro il ciclo for viene creatata una variabile blockElem 
     che grazie alla funzione createElement ad ogni iterazione del ciclo
     creerà un blocco.
     
     Con blockElem.classList = "block" a questo divi associamo lo stile css che conferirà al blocco le caratteristiche di stile da noi scelte.

3. Viene calcolata la posizione casuale in altezza(top) per il blocco

    const topC = Math.floor(Math.random() * (window.innerHeight / 50)) * 50;
      
       - Math.floor() = arrotonda il numero verso il basso  all'intero più vicino  

       - Math.random() = restituisce un numero casuale tra 0 compreso e 
       1 escluso.

       - (window.innerHeight / 50) Ci permette di dividere l'altezza della finestra n numero di volte. In questo caso visto che il nostro blocco è di 50px decidiamo di divere la finestra per 50 volte, ottenendo cosi 50 row(righe orizzontali)

       - (window.innerWidth / 50) Ci permette di dividere la larghezza
       della finestra n numero di volte. In questo caso visto chew il nostro blocco è di 50px decidiamo di dividere la finestra per 50 volte, ottenendo cosi 50 col(colonne verticali)

    Math.random() restituisce un numero casuale compreso tra 0 incluso e 1 escluso.

    window.innerHeight restituisce l'altezza della finestra del browser.
    Viene calcolato un numero casuale multiplo di 50 e arrotondato all'
    intero più vicino

4. Viene calcolata la posizione casuale in larghezza(left) per il   
    blocco

    const leftC = Math.floor(Math.random() * (window.innerWidth / 50)) * 50;
    
    Simile a come è stato fatto per l'altezza, ma stavolta usando window.innerWidth per ottenere la larghezza della finestra del browser.

5. Vengono assegnate le coordinate del nuovo elemento div

    blockElem.style.top = topC + "px";
       
       Controlla la posizione verticale di un elemeto(blockElem) rispetto al suo contenitore. Dunque stiamo definendo la distanza verticale tra l'elemento rispetto al lato superiore del contenitore

    blockElem.style.left = leftC + "px";

       Controlla la posizione orizzontale di un elemento(blockElem) rispetto al suo contenitore. Dunque stiamo definendo la distanza orizzontale tra l elemento rispetto al lato sinistro del contenitore  

    Questo imposta valori di stile "top" e "left" per il blocco appena creato, posizionandolo nella finestra del browser alle coordinate calcolate.

6. Il blocco viene inserito nel body dell elemento html  

    document.querySelector("body").append(blockElem);
    
    L'elemento div appena creato viene aggiunto come figlio del body del documento HTML.

7. Il riferimento al blocco viene aggiunto all'array blocks
   
   blocks.push(blockElem);

   Questo è fatto per tenere traccia dei blocchi creati dinamicamente,
   consentendo di accedere facilmente a essi in futuro.

8. EVENTO MOVIMENTO TASTIERA    

   Questo è l evento che gestisce il movimento del blocco sprite.
   quando vengono preemuti i tasti della freccia sulla tastiera.
   Quando un tasto viene premuto, fiene assegnata la funzione callback. All? interno di questa funzione, eseguiamo le seguenti operazioni

   - stampiamo il codice del tasto premuto sulla console
     utilizzando console.log("Tasto premuto:", e.code);

   - in base al tasto premuto(e.code) aggiorniamo le posizioni top
     e left del blocco sprite in modo da spostarlo in su, giu, destra e sinistra utilizzando sprite.style.top e sprite.style.left

   SPIEGAZIONE EVENTO
    
    document.addEventListener("keydown", function(e){})

    Qui stiamo aggiungendo un ascoltatore di eventi al documento.
    L'evento che stiamo ascoltando è "kaydown", che viene attribuito quando un tasto della tastiera viene premuto.

    e.code è una proprietà dell'oggetto evento che rappresenta il codice del tasto che è stato premuto durante l 'evento di pressione del tasto("keydown")
    
    Dunque fornisce un identificatore univoco per il tasto premuto, indipendentemente dalla lingua o dalla configurazioe dell'utente.

    Esempio
     se viene premuta la freccia su, e.code restituirà "ArrowUp"

   Spieghiamo il primo if
    
    if (e.code === "ArrowDown") {
        sprite.style.top = sprite.offsetTop + 50 + "px";
    }
     Questa parte di codice gestisce il movimento verso il basso del nostro blocco sprite. 
     Se e.code è strettamente uguale a "ArrowDown" allora il blocco di codice all'interno delle graffe viene eseguito.

     sprite.style.top = sprite.offsetTop + 50 + "px";
      
      Questa riga aggiorna la posizione verticale del blocco spostandolo verso il basso di 50px rispetto alla sua posizione corrente.
      Per fare ciò sprite.offsetTop restitusce la posizione che il blocco ha in quel momento aggiungendo 50 pixel a quella posizione (sprite.offsetTop + 50) spostiamo il blocco verso il basso.
      "px"
        viene aggiunto per specificare che il valore è espresso in px
     
     Stesso principo vale per "ArrowUp", "ArrowRight" e "ArrowLeft"

    
9. COLLISIONI
    
    const spriteCoord = 

    sprite.getBoundingClientRect(); Questa riga ottiene le coordinate di delimitazione
    (bounding box) o scatola delimitante.
    Questo metodo restituisce un oggetto contenete le dimensioni e la posizione del rettangolo più piccolo che racchiude completamente l'elemento, relative alla finestra di visualizzazione.
    Facendo chiarezza:
    getBoundingClientRect() è come una cornice invisibile che circondo l'elemento sprite. 
    Questa cornice ha i seguenti attributi:
    - si adatta perfettamente ai limiti esterni dell'elemento sprite.
    - ha la stessa forma e le stesse dimensioni di sprite
    - è posizionato in modo che l'angolo in alto a sinistra della cornice corrisponda all'angolo in alto a sinistra di sprite

    for (let i = 0; i < blocks.length; i++) { ... }: Questo ciclo for scorre attraverso tutti gli elementi presenti nell'array blocks, ciascuno dei quali rappresenta un blocco sulla pagina.

      Questo ciclo scorre attraverso tutti gli elementi nell'array blocks, che rappresentano i blocchi generati casualmente sulla pagina. Per ogni blocco, vengono ottenute le sue coordinate di delimitazione (bounding box)  utilizzando il metodo getBoundingClientRect(). Questo metodo restituisce un oggetto contenente le dimensioni e la posizione del rettangolo più piccolo che racchiude completamente l'elemento ("vedi esempio cornice"), relative alla finestra di visualizzazione.

    Condizione all' interno di for

      in questa condizione vengono esaminate le cordinate di sprite e dei blocchi random.
      Se le coordinate left e top di sprite corrispondono esattamente alle coordinate del blocco corrente appartenente all array blocks, viene rilevata una collisione e avremo un messaggio in console hit!
      Inoltre utilizzando il metodo remove applicato all elemeto inserito nel array blocks 
      il blocco corrente entrato in collisione con sprite verra rimosso.      


 


