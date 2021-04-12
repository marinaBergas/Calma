
import './App.css';
import WebNavbar from '../components/Navbar/Navbar';
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Blogs from '../components/Blogs/Blogs';
import Doctors from '../components/Doctors/Doctors';
import Register from '../components/Register/Register';
import Sidebar from '../components/Dashboard/Sidebar';
import Schedule from '../components/Dashboard/Schedule';


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
            <Route path="/dashboard" exact component={Sidebar}/>
          </Switch>
          
      </Router>
      <Router>
            <switch>
              <Route path="/dashboard/Schedule" component={Schedule}/>
            </switch>
      </Router>
    
    </div>
  );
}

export default App;
