import React from 'react'
import { StyleSheet, View, Text, TouchableNativeFeedback, Linking } from 'react-native'

import ImageButton from '../buttons/ImageButton'
import RowBar from '../bars/RowBar'

import PhoneIcon from '../assets/phone.png'

const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'grey'
    },
    thumbnail: {
        marginRight: 10,
        width: 32,
        height: 32,
        borderRadius: 15,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

function ContactItemView({ tutorData, onPressItem }) {
    const { name, categoryName, location, classLocPref, phoneNumber, createdOn } = tutorData
    return (
        <RowBar style={styles.container}>
            <TouchableNativeFeedback onPress={onPressItem}>
                <View>
                    <RowBar style={{ alignItems: 'flex-start' }} >
                        <View style={styles.thumbnail}>
                            <Text style={{ color: 'white', fontWeight: '700' }}>{name.split('')[0]}</Text>
                        </View>
                        <View>
                            <Text numberOfLines={1} ellipsizeMode='tail' style={{ fontSize: 17, fontWeight: '600', width: 200 }}>{name}</Text>
                            <Text>{categoryName}</Text>
                            <Text>{location}</Text>
                            <Text>{classLocPref}</Text>
                        </View>
                    </RowBar>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={() => Linking.openURL(`tel:${phoneNumber}`)}>
                <View>
                    <Text style={{ fontSize: 10, color: 'grey' }}>{createdOn}</Text>
                    <ImageButton onPress={() => Linking.openURL(`tel:${phoneNumber}`)} label='' source={PhoneIcon} />
                </View>
            </TouchableNativeFeedback>
        </RowBar>
    )
}

export default ContactItemView