class Library {
    constructor(data) {
        this.id = data.id 
        this.name = data.name 
        this.books = data.books
    }

    renderLibraries() {
        return `
        <li>
        <a href="#" data-id="${this.id}">${this.name}</a> 
        </li>
        <br>
        `
    }

    renderLibrary() {
        return `
        <h3>${this.name}</h3>
        <br>
        <button type="button" id="add-book-form">Add Book</button>
        <hr>
        <br>
        `
        // button to add book to library needs this.id
    }
}