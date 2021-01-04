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
        <a href="#" data-id="${this.id}">${this.title}</a>  |   ${this.read ? "Read" : "Not yet read"}
        </li>
        `
    }
}