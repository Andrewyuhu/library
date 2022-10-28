let library = []; // Library array that will hold books
const submitBook = document.querySelector(".submitBook");
const addBook = document.querySelector(".addBook");
const closePop = document.querySelector('.closePopUp');

submitBook.addEventListener("click",submitBookData);

addBook.addEventListener("click", () => {
    const popUpContainer = document.querySelector(".popUpContainer");
    popUpContainer.classList.add("appearAnimation");
});


closePop.addEventListener("click", () => {
    const popUpContainer = document.querySelector(".popUpContainer");
    popUpContainer.classList.remove("appearAnimation");
});


function Book (title,author,pages,read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title,author,pages,read){
    let newBook = new Book(title,author,pages,read);
    library.push(newBook);
    createBookElement();
    document.querySelector("form").reset();

}

function submitBookData() {
    const form = document.querySelector("form");
    const name = document.querySelector("input[id='bookName']");
    const author = document.querySelector("input[id='authorName']");
    const pages = document.querySelector("input[id='pages']");
    const read = document.querySelector("input[id='read']");
    const formVariables = [name,author,pages];
    let formFilled = true;
    // Form styling if invalid
    formVariables.forEach(item => {
        console.log(item.value);
        if (item.value == ''){
            item.classList.add("invalid");
            formFilled = false;
        } else {
            item.classList.remove("invalid");
        }
    })
    console.log(formFilled)
    if (formFilled) {
        addBookToLibrary(name.value,author.value,pages.value,read.checked);
        const popUpContainer = document.querySelector(".popUpContainer");
        popUpContainer.classList.remove("appearAnimation");
    }

}

function createBookElement(){
    const mainDiv = document.createElement("div");
    const bookShelf = document.querySelector('.bookShelf');
    const metaData = document.createElement("div");
    const bookTitle = document.createElement("div");
    const authorText= document.createElement("div");
    const descriptionText = document.createElement("div");
    const bookNum = library.length - 1;
    bookTitle.innerText = library[bookNum].title;
    authorText.innerText = library[bookNum].author;
    descriptionText.innerText = library[bookNum].pages;
    

    authorText.classList.add("authorText");
    bookTitle.classList.add("bookTitle");
    metaData.classList.add("metaData");
    mainDiv.classList.add("book");
    mainDiv.setAttribute("data-book-number",bookNum)
    descriptionText.classList.add("descriptionText");

    metaData.appendChild(bookTitle);
    metaData.appendChild(authorText);
    mainDiv.appendChild(metaData);
    mainDiv.appendChild(descriptionText);
    bookShelf.appendChild(mainDiv);


}

