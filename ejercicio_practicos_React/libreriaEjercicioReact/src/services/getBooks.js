const API_URL= "http://localhost:3005/api/libros"

export async function getAllBooks() {
    let books = []
    try {
        const result = await fetch(`${API_URL}`)
        const book= await result.json()
        books.push(book)
        
    } catch (error) {
        console.log(error)
        return false
    }
    return books
}

