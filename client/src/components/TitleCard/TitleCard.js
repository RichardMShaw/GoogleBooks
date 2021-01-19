import { Card, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  centerText: {
    textAlign: 'center',
  },
}))

const TitleCard = (props) => {
  const classes = useStyles()

  const { title, subtitle } = props
  return (
    <Card>
      <Typography variant="h2" className={classes.centerText}>
        {title}
      </Typography>
      <Typography variant="h4" className={classes.centerText}>
        {subtitle}
      </Typography>
    </Card>
  )
}

export default TitleCard
