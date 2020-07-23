import { createSelector } from 'reselect'

const tutorSelector = (state) => state

const tutorDataSelector = createSelector(tutorSelector, (tutor) => tutor)


export {
    tutorDataSelector
}
