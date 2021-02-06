import React, { useState } from 'react'
import {
    View,
    Text,
    TextInput,
    Button,
    Keyboard,
    Alert,
    TouchableWithoutFeedback
} from 'react-native'
import NumberContainer from '../components/NumberContainer'
import { startGame, cardView, main } from '../Styles.js'

const StartGameScrenn = ({ onStartGame }) => {

    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState()

    const confirmHandler = () => {
        const chosenNumber = parseInt(enteredValue)
        if (chosenNumber !== NaN &&
            chosenNumber > 0 &&
            chosenNumber <= 99) {
            setConfirmed(true)
            setSelectedNumber(chosenNumber)
            setEnteredValue('')
        } else {
            Alert.alert('Invalid Number', 'Number has to be between 1 and 99', [{ text: 'Okay', style: 'destructive', onPress: resetInput }])
        }
        Keyboard.dismiss()
    }

    const resetInput = () => {
        setEnteredValue('')
        setConfirmed(false)
    }

    const ConfirmedOutput = () => {
        return (
            <View>
                <NumberContainer number={selectedNumber} text="You selected" />
                <Button title="Start Game" onPress={() => { onStartGame(selectedNumber) }} />
            </View>

        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={main.screenWithPadding}>
                <Text style={startGame.title}>Start a New Game</Text>
                <View style={{ ...cardView.card, ...startGame.inputContainer }}>
                    <Text>Select a Number</Text>
                    <TextInput
                        style={{ ...cardView.input, ...startGame.input }}
                        keyboardType='numeric'
                        maxLength={2}
                        onChangeText={e => setEnteredValue(e.replace(/[^0-9]/g, ''))}
                        value={enteredValue}
                    />
                    <View style={startGame.buttonContainer}>
                        <View style={startGame.button}>
                            <Button
                                title="Reset"
                                onPress={resetInput}
                                color="red" />
                        </View>
                        <View style={startGame.button}>
                            <Button
                                title="Confirm"
                                onPress={confirmHandler}
                            />
                        </View>
                    </View>
                </View>
                {confirmed && <ConfirmedOutput />}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGameScrenn
