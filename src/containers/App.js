
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

import Signin from '../components/Form/Signin/Signin';
import SignUp from '../components/Form/SignUp/SignUp';
import Messages from '../components/Dashboard/Messages';
import Patients from '../components/Dashboard/Patients';
import { auth, handleUserProfile } from '../firebase/utils';
import { useEffect, useState } from 'react';
import {setCurrentUser} from '../redux/User/User.action';
import {connect, useDispatch} from 'react-redux'
import Admin from '../components/Admin/Admin';

//const authListener=null;
const App=props => {
  const dispatsh = useDispatch();


//  const [authListener, setauthListener] = useState(initialState)
 useEffect((starus) => {
  
  const authListener = auth.onAuthStateChanged(async userAuth =>{
    if(userAuth)  {
      const userRef = await handleUserProfile(userAuth);
      userRef.onSnapshot(snapshot=>{
        dispatsh(setCurrentUser({
          id : snapshot.id,
          ...snapshot.data()
        }))
      })
    }
    dispatsh(setCurrentUser (userAuth))
  })
 },[])

  return (

    <div className="App">
      <Router>
        <WebNavbar/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blogs" component={Blogs}/>
            <Route path="/about" component={Header}/>
            <Route path="/doctors" component={Doctors}/>
            <Route path="/register/signup" component={SignUp}/>
            <Route path="/register/signin" component={Signin}/>
            <Route path="/dashboard" exact component={Sidebar}/>
            <Route path="/dashboard/Schedule" exact component={Schedule}/>
            <Route path="/dashboard/Messages" exact component={Messages}/>
            <Route path="/dashboard/Patients" exact component={Patients}/>
            <Route path="/admin" exact component={Admin}/>
          </Switch>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
