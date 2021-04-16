import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { checkUserIsAdmin } from '../../firebase/utils';


const mapState = ({user}) => ({
    currentUser:user.currentUser,
  });
const Admin = () => {
    const history = useHistory();
    const {currentUser} = useSelector(mapState);
    useEffect((currentUser) => {
        if(!checkUserIsAdmin(currentUser)){
            history.push("/register/signin");

        }else{
            history.push("/");  
        }
    }, [currentUser])
    return (
        <div>
            <h1>admin</h1>a
        </div>
    )
}

export default Admin

