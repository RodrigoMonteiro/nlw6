import Home from './pages/Home'
import Room from './pages/Room'
import NewRoom from './pages/NewRoom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { AuthContextProvider } from './contexts/AuthContext'



function App() {


  return (
    <Router>
      <AuthContextProvider>

        <Switch>

          <Route path="/" exact component={Home}></Route>
          <Route path="/rooms/new" exact component={NewRoom}></Route>
          <Route path="/rooms/:id" exact component={Room}></Route>

        </Switch>

      </AuthContextProvider>

    </Router>
  );
}

export default App;
