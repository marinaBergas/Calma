import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const mapState = ({user})=>({
   currentUser:user.currentUser
})

const AdminTollbar = () => {
    const{currentUser} = useSelector(mapState);
    const isAdmin =checkUserAdmin(currentUser)
    return (
        <div className="adminToolbar">
            <ul>
                <li>
                    <Link to="/">
                        Admin
                    </Link>
                </li>

            </ul>
            
        </div>
    )
}

export default AdminTollbar
