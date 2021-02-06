import React from 'react'
import { View, Text } from 'react-native'
import { header } from '../Styles.js'

const Header = ({ title }) => {
    return (
        <View style={header.header}>
            <Text style={header.headerTitle}>{title}</Text>
        </View>
    )
}

export default Header
