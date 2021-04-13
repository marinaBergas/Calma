import doctorTypes from './Doctors.types'

export const addDoctors = doctorData=> ({
   type:doctorTypes.ADD_NEW_DOCTOR,
   payload:doctorData
})