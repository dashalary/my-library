class Book {
    constructor(data) {
        this.id = data.id 
        this.title = data.title 
        this.author = data.author 
        this.read = data.read
        this.library = data.library
    }

    render() {
        return `
        <li>
        <a href="#" data-id="${this.id}">${this.title}</a>      |       ${this.read ? "Read" : "Not yet read"}
        </li>
        <br>
        `
    }

    renderBook() {
        return `
        <h3>${this.title}</h3>
        <p>by ${this.author}</p>
        <hr>
        <br>
        <p>Belongs to ${this.library.name}.</p>
        <p>${this.read ? "Read" : "Not yet read"}.</p>
        <br>
        <button id="delete-book" data-id="${this.id}">Delete This Book</button>
        `
    }
}