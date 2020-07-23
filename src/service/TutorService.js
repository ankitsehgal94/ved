import axios from 'axios'
import ProcessResponse from '../utility/ProcessResponse'

const url = 'http://www.mocky.io/v2/5c41920e0f0000543fe7b889'
const Axios = axios.create()

const TutorService = (function () {
    function getDetails() {
        return Axios.post(url).then((resp) =>
            ProcessResponse(resp)
        )
    }

    return {
        getDetails
    }
})()

export default TutorService
