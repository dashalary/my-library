class Book {
    constructor(data) {
        this.id = data.id 
        this.title = data.title 
        this.author = data.author 
        this.read = data.read
    }

    render() {
        return `
        <li>
        <a href="#" data-id="${this.id}">${this.title}</a>      |       ${this.read ? "Read" : "Not yet read"}
        </li>
        `
    }

    renderBook() {
        return `
        <h3>${this.title}</h3>
        <p>by ${this.author}</p>
        <hr>
        <br>
        <p>${this.read ? "Read" : "Not yet read"}</p>
        `
    }
}