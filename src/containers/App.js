
import './App.css';
import WebNavbar from '../components/Navbar/Navbar';
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Blogs from '../components/Blogs/Blogs';
import Doctors from '../components/Doctors/Doctors';
import Register from '../components/Register/Register';
import Sidebar from '../components/Dashboard/Sidebar';
import Schedule from '../components/Dashboard/Schedule';

import Header from '../components/Home/Header/Header';
import Footer from '../components/Footer/Footer';

import Messenger from '../components/Dashboard/Messenger'

import Signin from '../components/Form/Signin/Signin';
import SignUp from '../components/Form/SignUp/SignUp';

function App() {

  return (
    <div className="App">
      <Router>
        <WebNavbar/>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/blogs" component={Blogs}/>
            <Route path="/about" component={Header}/>
            <Route path="/doctors" component={Doctors}/>
            <Route path="/register/signup" component={SignUp}/>
            <Route path="/register/signin" component={Signin}/>
            <Route path="/dashboard" exact component={Sidebar}/>
          </Switch>
          
      </Router>
      <Messenger/>
    </div>
  );
}

export default App;
