import React from 'react'
import PeopleIcon from '@material-ui/icons/People';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import DateRangeIcon from '@material-ui/icons/DateRange';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
export const CardData = [
    {
        title:"Patients",
        icon:<PeopleIcon style={{color:'purple' ,fontSize: 50}}/>,
        cName: 'patients'
    },
    {
        title:"Income",
        icon:<LocalAtmIcon style={{color:'blue',fontSize: 50}}/>,
        cName: 'income'
    },
    {
        title:"Appointments",
        icon:<DateRangeIcon style={{color:'green',fontSize: 50}}/>,
        cName: 'Appointments'
    },
    {
        title:"Treatments",
        icon:<FavoriteBorderIcon style={{color:'red',fontSize: 50}}/>,
        cName: 'treatments'
    },
]
