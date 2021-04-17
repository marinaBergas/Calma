import React from 'react'
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import MessageIcon from '@material-ui/icons/Message';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const Sidedata = [
    {
        title:"Dashboard",
        icon:<DashboardIcon/>,
        link:"/Dashboard",
        cName: 'nav-text'
    },
    {
        title:"Schedule",
        icon:<CalendarTodayIcon/>,
        link:"/dashboard/Schedule",
        cName: 'nav-text'
    },
    {
        title:"Patients",
        icon:<PersonIcon/>,
        link:"/dashboard/Patients",
        cName: 'nav-text'
    },
    {
        title:"Messages",
        icon:<MessageIcon/>,

        link:"/Messenger",
        link:"/dashboard/Messenger",
        cName: 'nav-text'
    },
    {
        title:"Logout",
        icon:<ExitToAppIcon/>,
        link:"/register/signin",
        cName: 'nav-text'
    },
]
