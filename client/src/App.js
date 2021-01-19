import Navbar from './components/NavBar'
import Search from './pages/Search'
import Saved from './pages/Saved'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
          <Route path="/saved">
            <Saved />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
