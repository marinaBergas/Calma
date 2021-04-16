
import './App.css';
import WebNavbar from '../components/Navbar/Navbar';
import {BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Blogs from '../components/Blogs/Blogs';
import Doctors from '../components/Doctors/Doctors';
import Register from '../components/Register/Register';
import Sidebar from '../components/Dashboard/All-Appointments/Sidebar/Sidebar';
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
import {connect} from 'react-redux'
import Dashboard from '../components/Dashboard/Dashboard';

//const authListener=null;
const App=props => {
  const {currentUser , setCurrentUser} = props
//  const [authListener, setauthListener] = useState(initialState)
 useEffect((starus) => {
  
  const authListener = auth.onAuthStateChanged(async userAuth =>{
    if(userAuth)  {
      const userRef = await handleUserProfile(userAuth);
      userRef.onSnapshot(snapshot=>{
        setCurrentUser({
          id : snapshot.id,
          ...snapshot.data()
        })
      })
    }
    setCurrentUser (userAuth)
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
            <Route path="/dashboard" exact component={Dashboard}/>
            <Route path="/dashboard/Schedule" exact component={Schedule}/>
            <Route path="/dashboard/Messages" exact component={Messages}/>
            <Route path="/dashboard/Patients" exact component={Patients}/>

          </Switch>
          <Footer/>
      </Router>
    </div>
  );
}
const mapStateToProps = ({user})=>({
   currentUser:user.currentUser
});
const mapDispatchToProps =dispatch=>({
  setCurrentUser :user => dispatch(setCurrentUser(user))
});
export default connect(mapStateToProps,mapDispatchToProps)(App);
