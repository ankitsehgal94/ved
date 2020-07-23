import { GET_TUTOR_DETAILS_SUCCESS } from './constants'

const tutorReducer = (state = [], action) => {
    if (action.type === GET_TUTOR_DETAILS_SUCCESS) {
        return [...state, ...action.payload.dataList]
    }
    return state
}

export default tutorReducer