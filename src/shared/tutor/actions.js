import { GET_TUTOR_DETAILS, GET_TUTOR_DETAILS_SUCCESS } from './constants'

const TutorActions = (function () {
    function getTutorDetails() {
        return { type: GET_TUTOR_DETAILS }
    }

    function getTutorDetailsSuccess(data) {
        return { type: GET_TUTOR_DETAILS_SUCCESS, payload: data }
    }

    return { getTutorDetails, getTutorDetailsSuccess }
})()

export default TutorActions