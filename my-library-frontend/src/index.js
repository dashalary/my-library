const apiService = new ApiService()
let main = document.getElementById('main')

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

