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
        `
    }

    renderLibrary() {
        return `
        <h3>${this.name}</h3>
        <hr>
        <br>
        <li>
        <a href="#" data-id="${this.id}">${this.books.title}</a> 
        </li>
        `
    }
}