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
  })
  const searchGoogle = (search) => {
    getGoogleBooks(search).then(({ data: gBooks }) => {
      let books = gBooks.items.map((gBook, i) => {
        let info = gBook.volumeInfo
        console.log(info)
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
          index: i,
        }
        return book
      })
      console.log(books)
      setBookState({ googleBooks: books })
    })
  }

  const saveGoogleBook = (index) => {
    console.log(bookState.googleBooks[index])
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
        {bookState.googleBooks.map((book) => {
          return (
            <BookCard
              title={book.title}
              subtitle={book.subtitle}
              authors={book.authors}
              description={book.description}
              image={book.image}
              link={book.link}
              index={book.index}
              save={saveGoogleBook}
            />
          )
        })}
      </Card>
    </>
  )
}

export default Search
