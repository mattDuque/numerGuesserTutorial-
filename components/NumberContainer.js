import React from 'react'
import { View, Text } from 'react-native'
import { numberContainer, cardView } from '../Styles.js'


export default function NumberContainer({ number, text, styles }) {
    return (
        <View style={{ ...cardView.card, ...numberContainer.container, ...styles }}>
            <Text style={numberContainer.text}>{text}</Text>
            <View style={numberContainer.numberContainer}>
                <Text style={numberContainer.number} >{number}</Text>
            </View>
        </View>
    )
}
