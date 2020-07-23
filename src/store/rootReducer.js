import { combineReducers } from 'redux'

import tutorReducer from '../shared/tutor/reducer'

const rootReducer = combineReducers({
    tutor: tutorReducer
})

export default rootReducer