const apiService = new ApiService()
let main = document.getElementById('main')

const init = () => {
    addEventListeners()
    renderBooks()
}

function addEventListeners() {
    document.getElementById('book-form').addEventListener('click', displayCreateForm)
    document.getElementById('books').addEventListener('click', renderBooks)
}

async function renderBooks() {
    const books = await apiService.fetchBooks() // my JSON data
    main.innerHTML = ""
    books.map(book => {
        const newBook = new Book(book)
        main.innerHTML += newBook.render() // using an instance method on the prototype of my Book class
    })
    attachClicks()
}

function displayCreateForm() {
    let formDiv = document.querySelector("#new-book-form")
    let html = `
    <form>
    <label>Title: </label>
    <input type="text" id="title">
    <label>Author: </label>
    <input type="text" id="author">
    <label>Author: </label>
    <input type="text" id="author">
    <label>Have you already read it? </label>
    <input type="checkbox" id="read">
    <input type="submit">
    </form>
    `
    formDiv.innerHTML = html 
    document.querySelector('form').addEventListener('submit', addBook)
}

function clearForm() {
    let formDiv = document.querySelector("#new-book-form")
    formDiv.innerHTML = ""
}

function attachClicks() {
    const books = document.querySelectorAll("li a")
    books.forEach(book => {
        book.addEventListener('click', displayBook)
    })
}





init()