import { call, put, takeEvery } from 'redux-saga/effects'

import TutorActions from '../../shared/tutor/actions'
import TutorService from '../../service/TutorService'

// import { handleError } from '../../utility/HandleError'

function* getDetails() {
    try {
        const resp = yield call(TutorService.getDetails)
        const registerData = resp.data
        yield put(TutorActions.getTutorDetailsSuccess(registerData))
    } catch (error) {
        // const newError = handleError(error.response)
        // yield put(TutorActions.getTutorDetailsFailed(newError))
    }
}

export default function* UserSaga() {
    yield takeEvery(TutorActions.getTutorDetails().type, getDetails)
}