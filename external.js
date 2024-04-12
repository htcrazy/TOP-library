class Book {
    constructor(id, name, author, pages, read) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;}

    makeBookDom() {
        let book = document.createElement('div');
        book.setAttribute('id',myLibrary[i].id);
        book.setAttribute('class','card');

        let title = document.createElement('p');
        title.setAttribute('class','title');
        title.innerText = myLibrary[i].name;

        let author = document.createElement('p');
        author.setAttribute('class','author');
        author.innerText = 'by ' + myLibrary[i].author + ' (' + myLibrary[i].pages + ' pages)';

        let readeth = document.createElement('p');
        readeth.setAttribute('class','read');
        if (myLibrary[i].read == true) {
            readeth.innerText = 'You have read this book.';
        } else {readeth.innerText = 'You have NOT read this book.';}

        let toggle = document.createElement('button');
        toggle.setAttribute('class','toggle');
        toggle.innerText = 'Toggle: Read/Unread';

        let remove = document.createElement('button');
        remove.setAttribute('class','kill');
        remove.innerText = 'Remove Book';

        let box = document.createElement('div');
        box.setAttribute('class','buttHolder');
        box.appendChild(toggle);
        box.appendChild(remove);


        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(readeth);
        book.appendChild(box);
        return book;
    }
}

const myLibrary = [new Book(0, 'Poetry in Motion', 'htcrazy', '69', true), new Book(1, 'The Count of Monte Cristo', 'Billy Bob', '420', false), 
    new Book(2, 'Solo Leveling King', 'Mishimoto', '69420', false), new Book(3, 'Wandering Inn', 'that one girl', '9001', true)];
let bookNum = 4;
refreshBookList();

const showForm = document.getElementById("add");
showForm.addEventListener("click", () => {
    document.getElementById('fillBox').showModal();
});

const addeth = document.getElementById('submitIt');
addeth.addEventListener('click', addBookToLibrary);
function addBookToLibrary() {
    let id = bookNum;
    bookNum += 1;
    let nem = document.getElementById('nameName').value;
    let who = document.getElementById('whoWho').value;
    let pages = document.getElementById('pagePage').value;
    let radioButt = document.getElementById('yessir');
    let readed = false;

    if (radioButt.checked == true) {
        readed = true;
    }
    
    myLibrary.push(new Book(id, nem, who, pages, readed));
    refreshBookList();

    document.getElementById('fillThis').reset();
    document.getElementById('fillBox').close();
}

function refreshBookList() {
    const bookcase = document.getElementById('liblib');
    while (bookcase.hasChildNodes()) {
        bookcase.removeChild(bookcase.lastChild);
    }

    for (i in myLibrary) {
        if (myLibrary[i] != null) {
            const poo = myLibrary[i].makeBookDom();
            bookcase.appendChild(poo);
        }
    }
    console.log(myLibrary)
}

const killeth = document.getElementById('liblib');
killeth.addEventListener('click', (e) => {
    let parentId = e.target.parentElement.parentElement.id;

    if (e.target.classList.contains('kill')) {
        myLibrary[parentId] = null;
        document.getElementById(parentId).remove();
        }
    if (e.target.classList.contains('toggle') && myLibrary[parentId].read == true) {
        myLibrary[parentId].read = false;
        document.getElementById(parentId).querySelector('.read').innerText = 'You have NOT read this book.';
        } else if (e.target.classList.contains('toggle') && myLibrary[parentId].read == false) {
        myLibrary[parentId].read = true;
        document.getElementById(parentId).querySelector('.read').innerText = 'You have read this book.';
        }
    console.log(myLibrary)
    });