import axios from 'axios'
const BooksAPI = {
  getGoogleBooks: (search) => axios.get(`/api/googlebooks/${search}`),
  getBooks: () => axios.get('/api/books'),
  saveBook: (book) => axios.post('/api/books', book),
  deleteBook: (id) => axios.delete(`/api/books/${id}`),
}

export default BooksAPI
