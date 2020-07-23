import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import ContactItemView from '../view/ContactItemView'

import TutorActions from '../../shared/tutor/actions'
import { tutorDataSelector } from '../../store/selector'
import { ScrollView } from 'react-native-gesture-handler';

function TutorContactDetailScreen({ navigation }) {
    const { tutor } = useSelector(tutorDataSelector)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(TutorActions.getTutorDetails())
    }, [])

    return (
        <ScrollView style={{ marginTop: 50 }}>
            {tutor.length > 0 && tutor.map((item) => <ContactItemView onPressItem={() => navigation.navigate('TutorContactDetailScreen', { enqId: item.enqId })} tutorData={item} />)}
        </ScrollView>
    )
}

export default TutorContactDetailScreen