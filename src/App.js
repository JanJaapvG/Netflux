import { Route, Switch } from 'react-router-dom';
import './App.css';
import LandingPage from './Pages/LandingPage';
import Toolbar from './Components/Toolbar/Toolbar';
import LoginPage from './Pages/LoginPage';

function App() {
  return (
    <div>
      <Toolbar/>
        <Switch> 
          <Route exact path ="/login" component = {LoginPage}/>
          <Route exact path ="/" component = {LandingPage}/>
        </Switch>  
    </div>
  )
}

export default App;
