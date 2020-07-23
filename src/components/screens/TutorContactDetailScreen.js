import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { useSelector } from 'react-redux'

import { tutorDataSelector } from '../../store/selector'

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20
    },
    thumbnail: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    thumbnailText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 40
    },
    nameText: {
        fontWeight: '500',
        fontSize: 30
    },
    phoneNumberText: {
        fontWeight: '500',
        fontSize: 20,
        marginTop: 10
    },
    categoryNameText: {
        fontWeight: '500',
        fontSize: 20,
        marginTop: 10
    },
    calssLocText: {
        fontWeight: '500',
        fontSize: 20,
        marginTop: 100
    },
    locationText: {
        fontWeight: '500',
        fontSize: 20,
        marginTop: 10
    }
})

function TutorContactDetailScreen({ route }) {
    const { tutor } = useSelector(tutorDataSelector)
    const { enqId } = route.params

    const filteredTutor = tutor.filter((item) => item.enqId === enqId)

    const { categoryName, location, name, phoneNumber, classLocPref } = filteredTutor[0]

    return (
        <View style={styles.container}>
            <View style={styles.thumbnail}>
                <Text style={styles.thumbnailText}>{name.split('')[0]}</Text>
            </View>
            <Text style={styles.nameText}>{name}</Text>
            <Text style={styles.phoneNumberText}>{`+91 ${phoneNumber}`}</Text>
            <Text style={styles.categoryNameText}>{categoryName}</Text>
            <Text style={styles.calssLocText}>{classLocPref}</Text>
            <Text style={styles.locationText}>{location}</Text>
        </View>
    )
}

export default TutorContactDetailScreen