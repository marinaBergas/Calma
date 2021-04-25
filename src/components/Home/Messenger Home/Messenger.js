import {Button} from 'reactstrap';
import React from 'react'
import { useHistory } from 'react-router'

const MessengerHome = () => {
    const history = useHistory();
const Messenger =()=>{
    history.push("/dashboard/Messenger");
}

  
    return (
        <div className=" col-md-6 col-xs-12 ">
        <Button
          color="primary"
          className=" bg-primary  btn-doctor my-2 w-50 text-uppercase "
          onClick={Messenger}
        >
       GO TO CALMA MESSENGER
        </Button>
      </div>
    )
}

export default MessengerHome
