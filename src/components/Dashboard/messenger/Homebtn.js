
import React from 'react';
import { Button } from "reactstrap";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import { useHistory } from "react-router-dom";


function Homebtn() {
    const history = useHistory();
    return (
        <div className="bg-secondary">
             <Button
             onClick={() => history.push('/')}
                color="primary"
                className=" bg-primary  btn-doctor my-2 w-30 h-10 text-uppercase"
              >
               BACK TO HOME
              </Button>
        </div>
    )
}

export default Homebtn
