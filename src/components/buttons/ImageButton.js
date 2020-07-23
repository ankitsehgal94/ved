import PropTypes from 'prop-types'
import React from 'react'
import { Image, Platform, StyleSheet, TouchableNativeFeedback, TouchableOpacity, View, Text } from 'react-native'

const styles = StyleSheet.create({
    imageButton: {
        alignItems: 'center'
    },
    imageHolder: {
        alignItems: 'center',
        borderRadius: 6,
        height: 48,
        justifyContent: 'center',
        marginBottom: 8,
        width: 48
    },
})

function ImageButton({ activeSource, isActive, label, onPress, source }) {
    const Touchable = Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback

    return (
        <View style={styles.imageButton}>
            <Touchable
                disabled={isActive}
                hitSlop={{ bottom: 20 }}
                onPress={onPress}
            >
                <View style={[styles.imageHolder]}>
                    <Image source={isActive ? (activeSource || source) : source} />
                </View>
            </Touchable>
            <Text size="small" weight={isActive ? 'semibold' : undefined}>{label}</Text>
        </View>
    )
}

ImageButton.propTypes = {
    activeSource: Image.propTypes.source,
    isActive: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onPress: PropTypes.func,
    source: Image.propTypes.source.isRequired
}

ImageButton.defaultProps = {
    activeSource: null,
    isActive: false,
    onPress: null
}

export default ImageButton
