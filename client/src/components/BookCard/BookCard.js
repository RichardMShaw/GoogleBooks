import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core'

const BookCard = (props) => {
  const {
    title,
    subtitle,
    authors,
    description,
    image,
    link,
    index,
    save,
    del,
  } = props

  const renderSaveOrDelete = () => {
    if (save !== undefined) {
      return (
        <Button color="primary" variant="contained" onClick={() => save(index)}>
          Save
        </Button>
      )
    } else if (del !== undefined) {
      return (
        <Button color="primary" variant="contained" onClick={() => del(index)}>
          Delete
        </Button>
      )
    }
    return ''
  }

  return (
    <Card>
      <CardContent>
        <Grid container xs={12}>
          <Grid xs={10}>
            <Typography>{title}</Typography>
          </Grid>
          <Grid xs={2}>
            {' '}
            <Button
              color="primary"
              variant="contained"
              href={link}
              target="_blank"
            >
              View
            </Button>
            {renderSaveOrDelete()}
          </Grid>
        </Grid>
        <Typography>{subtitle}</Typography>
        <Typography>Written By: {authors}</Typography>
        <Grid container xs={12}>
          <Grid xs={3} item>
            <img src={image} alt={title} />
          </Grid>
          <Grid xs={9} itme>
            {description}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default BookCard
