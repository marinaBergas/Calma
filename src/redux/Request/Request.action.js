import requestType from "./Request.actionTypes"


export  const Approve=(patient)=>({
        type:requestType.APPROVE,
        payload : patient
    }
)
export  const Disapprove=(patient)=>({
    type:requestType.DISAPPROVE,
    payload : patient
}
)