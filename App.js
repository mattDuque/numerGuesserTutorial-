import React, { useState } from 'react';
import Header from './components/Header';
import StartGameScren from './screens/StartGameScren';
import GameRunningScreen from './screens/GameRunningScreen'
import GameOverScreen from './screens/GameOverScreen'
import { View } from 'react-native';
import { main } from './Styles.js';

export default function App() {

  const [userNumber, setUserNumber] = useState()
  const [gameIsOver, setGameIsOver] = useState()

  const startGame = (selectedNumber) => {
    setUserNumber(selectedNumber)
  }
  const gameOver = (guessAmount) => {
    setGameIsOver({ guessAmount: guessAmount, userNumber: userNumber })
    setUserNumber(null)
  }

  const restart = () => {
    setUserNumber(null)
    setGameIsOver(null)
    console.log('ok')
  }

  return (
    <View style={main.screen}>
      <Header title="Guess a number" />
      {userNumber
        ? <GameRunningScreen userNumber={userNumber} onGameOver={gameOver} />
        : gameIsOver
          ? <GameOverScreen
            guessAmount={gameIsOver.guessAmount}
            userNumber={gameIsOver.userNumber}
            onRestart={restart} />
          : <StartGameScren onStartGame={startGame} />}
    </View>
  )
}

