import PropTypes from 'prop-types'
import React from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
    rowBar: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowBar_withBottomGap: {
        marginBottom: 16
    },
    rowBar_withTopGap: {
        marginTop: 16
    }
})

function RowBar({ children, style, withBottomGap, withTopGap }) {
    return (
        <View
            style={[
                styles.rowBar,
                withBottomGap && styles.rowBar_withBottomGap,
                withTopGap && styles.rowBar_withTopGap,
                !!style && style
            ]}
        >
            {children}
        </View>
    )
}

RowBar.propTypes = {
    style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    withBottomGap: PropTypes.bool,
    withTopGap: PropTypes.bool
}

RowBar.defaultProps = {
    style: null,
    withBottomGap: true,
    withTopGap: false
}

export default RowBar
