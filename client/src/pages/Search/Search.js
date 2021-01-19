import SearchForm from '../../components/Search'
import TitleCard from '../../components/TitleCard'

const Search = () => {
  const hello = (search) => {
    console.log(search)
  }

  return (
    <form>
      <TitleCard
        title="(React) Google Books Search"
        subtitle="Search for and Save Books of Interest"
      />
      <SearchForm title="Book Search" subtitle="Book" submitCb={hello} />
    </form>
  )
}

export default Search
