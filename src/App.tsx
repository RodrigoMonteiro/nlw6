import Home from './pages/Home'
import NewRoom from './pages/NewRoom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import {AuthContextProvider} from './contexts/AuthContext'



function App() {
 
  
  return (
    <Router>
      <AuthContextProvider>

        <Route path="/" exact component={Home}></Route>
        <Route path="/rooms/new" exact component={NewRoom}></Route>
      </AuthContextProvider>

    </Router>
  );
}

export default App;
