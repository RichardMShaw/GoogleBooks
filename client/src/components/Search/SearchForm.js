import { useState } from 'react'
import { Button, Card, TextField, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  leftText: {
    marginLeft: '1rem',
  },
  search: {
    marginLeft: '1rem',
    marginBottom: '1rem',
    width: 'calc(100% - 2rem)',
  },

  button: {
    float: 'right',
    marginRight: '1rem',
  },
}))

const SearchForm = (props) => {
  const classes = useStyles()

  const { title, subtitle, submitCb } = props

  const [searchState, setSearchState] = useState({
    search: '',
  })

  const handleInputChange = (event) => {
    setSearchState({ search: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    submitCb(searchState.search)
    setSearchState({ search: '' })
  }
  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <Typography variant="h5" className={classes.leftText}>
          {title}
        </Typography>
        <Typography variant="h6" className={classes.leftText}>
          {subtitle}
        </Typography>
        <TextField
          label="Search"
          variant="outlined"
          name="search"
          value={searchState.search}
          className={classes.search}
          onChange={handleInputChange}
        ></TextField>
        <Button
          color="primary"
          type="submit"
          className={classes.button}
          onClick={handleSubmit}
        >
          Search
        </Button>
      </Card>
    </form>
  )
}

export default SearchForm
