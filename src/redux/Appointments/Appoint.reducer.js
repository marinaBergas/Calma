import { AppointData } from "../../components/Dashboard/All-Appointments/AppointData";
import appointType from "./Appoint.actionTypes";
let lastId=0;
const appointReducer = (state=AppointData,action)=>{
    switch(action.type){
        case appointType.ACCEPTED:
            return [
                ...state,
                {
                   
                    patient:action.payload
                }
            ];
        case appointType.FINISHED:
            let patients = [...state];
            return patients.filter(patient=>patient.id !==action.payload.id); 
        default:
            return state;

    }
   
}
export default appointReducer;