// import React, { useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import { checkUserIsAdmin } from '../../firebase/utils';

// const mapState = ({user})=>({
//  currentUser:user.currentUser,
// });

// const UseAdminAuth = () => {
//     const history = useHistory();
//     const {currentUser}=useSelector(mapState);
//     useEffect(() => {
//         if(!checkUserIsAdmin(currentUser)){
//             history.push("/login");
//         }else{
//             history.push("/");  
//         }
//     }, [currentUser])
//     return currentUser
// }

// export default UseAdminAuth

