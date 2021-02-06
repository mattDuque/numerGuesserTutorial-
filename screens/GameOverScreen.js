import React from 'react'
import { View, Text, Button } from 'react-native'
import NumberContainer from '../components/NumberContainer'
import { main, cardView, gameOver } from '../Styles.js'

export default function GameOverScreen({ guessAmount, userNumber, onRestart }) {
    return (
        <View style={main.screenWithPadding}>
            <NumberContainer number={userNumber} text="Your number was" />
            <NumberContainer number={guessAmount} text="The computuer took this many tries to guess it" />
            <View style={{ ...cardView.card, ...gameOver.retryCard }}>
                <Text style={gameOver.retryText}>Can you think of a harder number?</Text>
                <Button title="Retry" onPress={e => onRestart()} />
            </View>
        </View>
    )
}
