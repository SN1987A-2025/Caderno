const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");
const paper4 = document.querySelector("#p4");
const paperultima = document.querySelector("#pultima");

prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

let currentLocation = 1;
let numOfPapers = 5;
let maxLocation = numOfPapers + 1

function openBook() {
    book.classList.add("open");
    // Detecta se a tela é pequena e ajusta o translate conforme
    if(window.innerWidth <= 600) {
        // Para telas pequenas, centraliza sem translateX
        book.style.transform = "scale(0.7) translateX(0)";
    } else {
        // Para telas maiores, escala e traduz
        book.style.transform = "scale(1.03) translateX(10vw)";
    }
    prevBtn.style.transform = "translateX(-20vw)";
    nextBtn.style.transform = "translateX(20vw)";
}

function closeBook(isAtBeggining) {
    if(isAtBeggining) {
        book.style.transform = "translateX(0vw)";
    } else {
        book.style.transform = "translateX(100vw)";
    }
    book.classList.remove("open")
    //book.style.transform = "translateX(0vw)";
    prevBtn.style.transform = "translateX(0)";
    nextBtn.style.transform = "translateX(0)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            case 3:
                paper3.classList.add("flipped");
                paper3.style.zIndex = 3;
                break;
            case 4:
                paper4.classList.add("flipped");
                paper4.style.zIndex = 4;
                break;
            case 5:
                paperultima.classList.add("flipped");
                paperultima.style.zIndex = 5;
                break;
            default:
                throw new Error("Unknow state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
        if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 5;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 4;
                break;
            case 4:
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 3;
                break;
            case 5:
                paper4.classList.remove("flipped");
                paper4.style.zIndex = 2;
                break;
            case 6:
                openBook();
                paperultima.classList.remove("flipped");
                paperultima.style.zIndex = 1;
                break;
            default:
                throw new Error("Unknow state");
        }
        currentLocation--;
    }
}