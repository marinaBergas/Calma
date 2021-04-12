
import './App.css';
import WebNavbar from '../components/Navbar/Navbar';
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Blogs from '../components/Blogs/Blogs';
import Doctors from '../components/Doctors/Doctors';
import Register from '../components/Register/Register';
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
            <Route path="/doctors" component={Doctors}/>
            <Route path="/register" component={Register}/>
          </Switch>
      </Router>
      <Signin/>
    <SignUp />
    </div>
  );
}

export default App;
