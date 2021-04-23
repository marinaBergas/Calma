import { AppointRequests } from "../../components/Dashboard/Appointments/AppointRequests";
import requestType from "./Request.actionTypes"
let lastId=0;
const requestReducer = (state=AppointRequests,action)=>{
    switch(action.type){
        case requestType.APPROVE:
            return [
                ...state,
                {
                    id: ++lastId,
                    patient:action.payload
                }
            ];
        case requestType.DISAPPROVE:
            let patients = [...state];
            return patients.filter(patient=>patient.id !==action.payload.id); 
        default:
            return state;

    }
   
}
export default requestReducer;