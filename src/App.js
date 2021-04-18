
import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home'
import Blog from './components/pages/Blog'
import Destinations from './components/pages/Destinations'
import Visit from './components/pages/Visit'
import Footer from './components/Footer'
import { blogData } from './json/clanci';
import Cards from './components/Cards';
import Post from './components/pages/Post'

function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/'exact component={Home} />
        <Route path='/blog' component={Blog}/>
        <Route path='/destinations' component={Post}/>
        <Route path='/visit-us' component={Visit}/>
        <Route path='/post/:id' component={Post}/>
      </Switch>
      <Footer /> 
    </Router>
    </>
  );
}

export default App;
