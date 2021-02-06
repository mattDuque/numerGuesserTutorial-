import React, { useState, useRef } from 'react'
import { View, Button, Alert } from 'react-native'
import NumberContainer from '../components/NumberContainer'
import { gameRunning, main } from '../Styles.js'

export default function GameRunningScreen({ userNumber, onGameOver }) {

    const [guessAmount, setGuessAmount] = useState(0)
    const [currentGuess, setCurrentGuess] = useState(
        generateRandomBetween(1, 100, userNumber))

    const currentLow = useRef(1)
    const currentHigh = useRef(100)

    function generateRandomBetween(min, max, exclude) {
        min = Math.ceil(min)
        max = Math.floor(max)
        const rndNum = Math.floor(Math.random() * (max - min)) + min
        if (rndNum === exclude) return generateRandomBetween(min, max, exclude)
        else return rndNum
    }

    const nextGuessHandler = (direction) => {
        if ((direction === 'lower' && currentGuess <= userNumber) ||
            (direction === 'greater' && currentGuess >= userNumber)) {
            Alert.alert("Maybe you made a mistake", "I trust you didn't lie ;)", [{
                style: 'cancel'
            }])
            return
        }
        if (direction === 'lower') {
            currentHigh.current = currentGuess
        } else {
            currentLow.current = currentGuess
        }
        setCurrentGuess(
            generateRandomBetween(currentLow.current, currentHigh.current, currentGuess)
        )
        setGuessAmount(e => guessAmount + 1)
    }

    const gameOver = () => {
        console.log(guessAmount)
        if (currentGuess === userNumber) {
            onGameOver(guessAmount)
            setGuessAmount(0)
        }
    }

    return (
        <View style={main.screenWithPadding}>
            <NumberContainer number={currentGuess} text="Is that your number?" />
            <View style={gameRunning.buttonContainer}>
                <View style={gameRunning.button}><Button title="Lower" onPress={() => nextGuessHandler('lower')} /></View>
                <View style={gameRunning.button}><Button title="Yes" onPress={gameOver} /></View>
                <View style={gameRunning.button}><Button title="Greater" onPress={() => nextGuessHandler('greater')} /></View>
            </View>
        </View>
    )
}
