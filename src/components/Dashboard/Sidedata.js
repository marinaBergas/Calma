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
        link:"/Dashboard"
    },
    {
        title:"Schedule",
        icon:<CalendarTodayIcon/>,
        link:"/dashboard/Schedule"
    },
    {
        title:"Patients",
        icon:<PersonIcon/>,
        link:"/Patients"
    },
    {
        title:"Messages",
        icon:<MessageIcon/>,
        link:"/Messages"
    },
    {
        title:"Logout",
        icon:<ExitToAppIcon/>,
        link:"/Login"
    },
]
