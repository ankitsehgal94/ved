import { spawn } from 'redux-saga/effects'
import TutorSaga from '../shared/tutor/sagas'

export default function* rootSaga() {
    yield spawn(TutorSaga)
}
