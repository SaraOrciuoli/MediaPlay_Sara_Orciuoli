// Rappresentare un MUSIC Player che contiene una lista di brani musicali:
// Implementare le seguenti funzionalita':

// - Animazione disco che gira
// - Funzione Play
// - Funzione Pausa
// - Funzione Next
// - Funzione Prev
// - Tempo che scorre
// - Durata brano

// DATI DI PARTENZA:
// I brani all'interno del nostro MUSIC PLAYER
let tracks = [
    { 'url': './canzoni progetto/Backstreet Boys - I Want It That Way.mp3', 'cover': './cover/cover-1.jpg', 'artist': 'Backstreet Boys', 'title': 'I Want It That Way' },
    { 'url': './canzoni progetto/Caparezza - Vieni a ballare in Puglia.mp3', 'cover': './cover/cover-2.jpg', 'artist': 'Caparezza', 'title': 'Vieni a ballare in Puglia' },
    { 'url': './canzoni progetto/El sueño de Morfeo- Esta soy yo.mp3', 'cover': './cover/cover-3.jpg', 'artist': 'El sueño de Morfeo', 'title': 'Esta soy yo' },
    { 'url': './canzoni progetto/I Am What I Am (2014 Club Version).mp3', 'cover': './cover/cover-4.jpg', 'artist': 'Gloria Gaynor', 'title': 'I Am What I Am' },
    { 'url': './canzoni progetto/Pitbull - 3 to Tango.mp3', 'cover': './cover/cover-5.jpg', 'artist': 'Pitbull', 'title': '3 to Tango' },
    { 'url': './canzoni progetto/Salsa_Con_Coco.mp3', 'cover': './cover/cover-6.jpg', 'artist': 'Pochy y Su Cocoband', 'title': 'Salsa_Con_Coco' },
    { 'url': './canzoni progetto/Shania_Twain_-_Man_I_Feel_Like_A_Woman.mp3', 'cover': './cover/cover-7.jpg', 'artist': 'Shania Twain', 'title': 'Man_I_Feel_Like_A_Woman' },
    { 'url': './canzoni progetto/Sud sound system - Le radici ca tieni con testo.mp3', 'cover': './cover/cover-8.jpg', 'artist': 'Sud sound system ', 'title': 'Le radici ca tieni con' },
    { 'url': './canzoni progetto/Sunrise NORAH JONES.mp3', 'cover': './cover/cover-9.jpg', 'artist': 'NORAH JONES', 'title': 'Sunrise' },
    { 'url': './canzoni progetto/Alanis-morissette-thank-you-lyrics-youtubemp3free.org.mp3', 'cover': './cover/cover-10.jpg', 'artist': 'Alanis Morissette', 'title': 'Thank you' }
];


// Catturare il contenitore della colonna 2
let wrapped = document.querySelector('#wrapped');
// Inizializzare il tag audio, per poterlo richiamare ogni volta che cambio audio 
let audio = null;

// Contenitore della mia lista
let counterTrack = 0;

//  Sezione Audio e Cover 
function createCover() {
    let div = document.createElement('div');
    div.classList.add('col-12', 'col-md-3', 'col-lg-5', 'd-flex', 'justify-content-center');
    div.innerHTML = `  
        <img class="img-rounded" src="${tracks[counterTrack].cover}" alt="">
         
        <audio preload="metadata">
            <source src="${tracks[counterTrack].url}" type="audio/mpeg">
        </audio>
        `;

    wrapped.appendChild(div);

    // Catturare l'elemento HTML ogni volta che lo richiamo
    audio = document.querySelector('audio');
}
// Info Track

function createInfoTrack() {
    let div = document.createElement('div');
    div.classList.add('col-12', 'col-md-5', 'col-lg-6', 'MyMargin');
    div.innerHTML = `
        <!-- Sezione Info Track -->
        <h2 class="text-center">${tracks[counterTrack].title}</h2>
        <h3 class="text-center">${tracks[counterTrack].artist}</h3>

        <div class="progress mt-5">
            <div class="progress-bar w-75" role="progressbar" aria-label="Basic example" aria-valuenow="75"
                aria-valuemin="0" aria-valuemax="100"></div>
        </div>
        <!-- Durata inizio-fine -->
        <div class="d-flex justify-content-between">
            <p>0:00</p>
            <p>5:00</p>
        </div>

        <div class="d-flex justify-content-between mt-3">
            <button id="btnBackward" class="btn btn-outline-dark fs-4"><i class="fa-solid fa-backward"></i></button>
            <button id="btnPlay" class="btn btn-outline-dark fs-4"><i class="fa-brands fa-google-play"></i></button>
            <button id="btnForward" class="btn btn-outline-dark fs-4"><i class="fa-solid fa-forward"></i></button>
        </div>`

    wrapped.appendChild(div);

    // Funzionalitá di: play, pause, prev, next
    let btnBackward = document.querySelector('#btnBackward');
    let btnPlay = document.querySelector('#btnPlay');
    let btnForward = document.querySelector('#btnForward');

    // Gestione funzioni Play/Pause
    btnPlay.addEventListener('click', () => {

        if (audio.paused) {
            audio.play();
            btnPlay.innerHTML = '<i class="fa-solid fa-pause"></i>';
        } else {
            audio.pause();
            btnPlay.innerHTML = '<i class="fa-brands fa-google-play"></i>';

        }
        

    })


}
// Funzione che crea la Cover audio
createCover();
// Funzione che crea l'Info Track
createInfoTrack();
