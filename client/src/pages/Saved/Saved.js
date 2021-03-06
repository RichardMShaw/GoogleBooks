import { Card, Typography } from '@material-ui/core'
import { useEffect, useState } from 'react'
import BookCard from '../../components/BookCard'
import TitleCard from '../../components/TitleCard'
import BooksAPI from '../../utils/BooksAPI'

const { getBooks, deleteBook } = BooksAPI
const Saved = () => {
  const [bookState, setBookState] = useState({
    books: [],
  })

  const delBook = (index) => {
    deleteBook(bookState.books[index]._id)
      .then(() => {
        getBooks().then(({ data: books }) => {
          setBookState({ books: books })
        })
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    getBooks()
      .then(({ data: books }) => {
        setBookState({ books: books })
      })
      .catch((err) => console.error(err))
  }, [])
  return (
    <>
      <TitleCard
        title="(React) Google Books Search"
        subtitle="Search for and Save Books of Interest"
      />
      <Card>
        <Typography>Saved</Typography>
        {bookState.books.map((book, i) => {
          return (
            <BookCard
              title={book.title}
              subtitle={book.subtitle}
              authors={book.authors}
              description={book.description}
              image={book.image}
              link={book.link}
              index={i}
              del={delBook}
            />
          )
        })}
      </Card>
    </>
  )
}

export default Saved
