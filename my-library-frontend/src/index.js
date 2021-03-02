const apiService = new ApiService()
let main = document.getElementById('main')

const init = () => {
    addEventListeners()
    renderLibraries()
}

function addEventListeners() {
    // document.getElementById('add-book-form').addEventListener('click', displayCreateForm)
    document.getElementById('books').addEventListener('click', renderBooks)
    document.getElementById('library-form').addEventListener('click', displayCreateLibForm)
    document.getElementById('libraries').addEventListener('click', renderLibraries)
    document.getElementById('read').addEventListener('click', renderRead)
}

async function renderBooks() {
    document.getElementById("new-library-form").innerHTML = ""
    document.getElementById("new-book-form").innerHTML = ""
    const books = await apiService.fetchBooks() // my JSON data
    main.innerHTML = ""
    books.map(book => {
        const newBook = new Book(book)
        main.innerHTML += newBook.render() // using an instance method on the prototype of my Book class
    })
    attachClicks()
}

async function renderRead() {
    document.getElementById("new-library-form").innerHTML = ""
    document.getElementById("new-book-form").innerHTML = ""
    const books = await apiService.fetchBooks() // my JSON data
    main.innerHTML = ""
    books.filter(book => book.read === true).forEach(book => {
        const newBook = new Book(book)
        main.innerHTML += newBook.render() // using an instance method on the prototype of my Book class
    })
    attachClicks()
}

async function renderLibraries() {
    document.getElementById("new-library-form").innerHTML = ""
    document.getElementById("new-book-form").innerHTML = ""
    const libs = await apiService.fetchLibraries() // my JSON data
    main.innerHTML = ""
    libs.map(lib => {
        const newLibrary = new Library(lib)
        main.innerHTML += newLibrary.renderLibraries() // using an instance method on the prototype of my Book class
    })
    attachClicksLib()
}

function displayCreateForm(id) {
    main.innerHTML = ""
    document.getElementById("new-library-form").innerHTML = ""
    let formDiv = document.querySelector("#new-book-form")
    let html = `
    <form>
    <input type="hidden" id="library-id" value="${id}">
    <label>Title: </label>
    <input type="text" id="title"><br>
    <br>
    <label>Author: </label>
    <input type="text" id="author"><br>
    <br>
    <label>Have you already read it? </label>
    <input type="checkbox" id="read"><br>
    <br>
    <input type="submit">
    </form>
    `
    formDiv.innerHTML = html 
    document.querySelector('form').addEventListener('submit', addBook)
}

function clearForm() {
    let formDiv = document.querySelector("#new-book-form")
    let formDivLib = document.querySelector("#new-library-form")
    formDiv.innerHTML = ""
    formDivLib.innerHTML = ""
}

async function addBook(e) {
    e.preventDefault()
    let main = document.getElementById("main")
    let book = {
        library_id: e.target.querySelector("#library-id").value,
        title: e.target.querySelector("#title").value,
        author: e.target.querySelector("#author").value,
        read: e.target.querySelector("#read").checked
    }
    let data = await apiService.fetchAddBook(book)
    let newBook = new Book(data)
    main.innerHTML += newBook.render()
    attachClicks()
    clearForm()
    e.target.style.display = "none"
}

function attachClicks() {
    const books = document.querySelectorAll("li a")
    books.forEach(book => {
        book.addEventListener('click', displayBook)
    })
}

function attachClicksLib() {
    const libraries = document.querySelectorAll("li a")
    libraries.forEach(lib => {
        lib.addEventListener('click', displayLibrary)
    })
}

async function displayBook(e) {
    let id = e.target.dataset.id
    const data = await apiService.fetchBook(id)
    const book = new Book(data)
    main.innerHTML = book.renderBook()
    document.getElementById('delete-book').addEventListener('click', removeBook)
}

async function displayLibrary(e) {
    let id = e.target.dataset.id
    const data = await apiService.fetchLibrary(id)
    const lib = new Library(data)
    main.innerHTML = lib.renderLibrary()
    if (lib.books) {
        lib.books.forEach(book => {
            main.innerHTML += `
            <li><a href="#" data-id="${book.id}">${book.title}</a></li>
            <br>
            `
        })
    }
    document.getElementById('add-book-form').addEventListener('click', () => displayCreateForm(id))
    attachClicks()
}

async function addLibrary(e) {
    e.preventDefault()
    let main = document.getElementById("main")
    let library = {
        name: e.target.querySelector("#name").value
    }
    let data = await apiService.fetchAddLibrary(library)
    let newLibrary = new Library(data)
    main.innerHTML += newLibrary.renderLibraries()
    attachClicksLib()
    clearForm()
}

function displayCreateLibForm() {
    main.innerHTML = ""
    document.getElementById("new-book-form").innerHTML = ""
    let formDiv = document.querySelector("#new-library-form")
    let html = `
    <form>
    <label>Name: </label>
    <input type="text" id="name"><br>
    <br>
    <input type="submit">
    </form>
    `
    formDiv.innerHTML = html 
    document.querySelector('form').addEventListener('submit', addLibrary)
}

async function removeBook(e) {
    let id = e.target.dataset.id
    const data = await apiService.fetchRemoveBook(id)
    .then(data => {
        renderBooks()
    })
}

init()