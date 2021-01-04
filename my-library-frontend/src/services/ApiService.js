class ApiService {
    constructor() {
        this.baseURL = 'http://localhost:3000'
    }

    async fetchBooks() {
        let res = await fetch(this.baseURL + '/books')
        let data = await res.json()
        return data
    }

    async fetchBook(id) {
        let res = await fetch(this.baseURL + `/books/${id}`)
        let data = await res.json()
        return data
    }
}