import { useState } from 'react'
import SearchForm from '../../components/Search'
import TitleCard from '../../components/TitleCard'
import BooksAPI from '../../utils/BooksAPI'

const { getGoogleBooks, saveBook } = BooksAPI

const Search = () => {
  const [bookState, setBookState] = useState({
    googleBooks: [],
  })
  const searchGoogle = (search) => {
    getGoogleBooks(search).then(({ data: books }) => {
      setBookState({ googleBooks: books.items })
    })
  }

  const returnGoogleBooks = () => {
    return bookState.googleBooks
  }

  return (
    <form>
      <TitleCard
        title="(React) Google Books Search"
        subtitle="Search for and Save Books of Interest"
      />
      <SearchForm title="Book Search" subtitle="Book" search={searchGoogle} />
    </form>
  )
}

export default Search
