import { Card, Typography } from '@material-ui/core'
import { useState } from 'react'
import BookCard from '../../components/BookCard'
import SearchForm from '../../components/Search'
import TitleCard from '../../components/TitleCard'
import BooksAPI from '../../utils/BooksAPI'

const { getGoogleBooks, saveBook } = BooksAPI

const Search = () => {
  const [bookState, setBookState] = useState({
    googleBooks: [],
    saved: [],
  })
  const searchGoogle = (search) => {
    getGoogleBooks(search).then(({ data: gBooks }) => {
      let books = gBooks.items.map((gBook, i) => {
        let info = gBook.volumeInfo
        let book = {
          title: info.title !== undefined ? info.title : '',
          subtitle: info.subtitle !== undefined ? info.subtitle : '',
          authors: info.authors !== undefined ? info.authors.join(', ') : '',
          description: info.description !== undefined ? info.description : '',
          image:
            info.imageLinks !== undefined ? info.imageLinks.smallThumbnail : '',
          link:
            info.canonicalVolumeLink !== undefined
              ? info.canonicalVolumeLink
              : '',
        }
        return book
      })
      let saved = new Array(books.length)
      setBookState({
        ...bookState,
        googleBooks: books,
        saved: saved.fill(''),
      })
    })
  }

  const saveGoogleBook = (index) => {
    let saved = bookState.saved
    saved[index] = 'true'
    setBookState({ ...bookState, saved: saved })
    saveBook(bookState.googleBooks[index])
  }

  return (
    <>
      <TitleCard
        title="(React) Google Books Search"
        subtitle="Search for and Save Books of Interest"
      />
      <SearchForm title="Book Search" subtitle="Book" search={searchGoogle} />
      <Card>
        <Typography>Results</Typography>
        {bookState.googleBooks.map((book, i) => {
          return (
            <BookCard
              title={book.title}
              subtitle={book.subtitle}
              authors={book.authors}
              description={book.description}
              image={book.image}
              link={book.link}
              index={i}
              save={saveGoogleBook}
              saved={bookState.saved[i]}
            />
          )
        })}
      </Card>
    </>
  )
}

export default Search
