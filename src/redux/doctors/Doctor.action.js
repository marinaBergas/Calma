import doctorTypes from './Doctors.types'

export const addDoctors = doctorData=> ({
   type:doctorTypes.SET_NEW_DOCTOR,
   payload:doctorData
})