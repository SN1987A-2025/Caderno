const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");

const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
const paper3 = document.querySelector("#p3");

prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

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
    book.style.transform = "translateX(0vw)";
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
                closeBook();
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.classList.zIndex = 2;
                break;
            case 4:
                openBook();
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 1;
                break;
            default:
                throw new Error("Unknow state");
        }
        currentLocation--;
    }
}