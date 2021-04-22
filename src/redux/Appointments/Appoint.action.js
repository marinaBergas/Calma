import appointType from "./Appoint.actionTypes"


export  const Accepted=(patient)=>({
        type:appointType.ACCEPTED,
        payload : patient
    }
)
export  const Finished=(patient)=>({
    type:appointType.FINISHED,
    payload : patient
}
)