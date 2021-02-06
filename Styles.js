import { StyleSheet } from 'react-native'
import Colors from './constants/colors'

const main = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
    },
    screenWithPadding: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
    }
})

const header = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: Colors.primary,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: 'black',
        fontSize: 18
    }
})

const startGame = StyleSheet.create({
    title: {
        fontSize: 20,
        marginVertical: 10,
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: '40%'
    },
    input: {
        height: 40,
        width: 50,
        textAlign: 'center'
    }
})

const gameRunning = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },
    button: {
        width: '30%'
    },
})

const gameOver = StyleSheet.create({
    retryCard: {
        width: '80%'
    },
    retryText: {
        marginBottom: 10,
        fontSize: 17,
        textAlign: 'center',
    }
})

const cardView = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 6,
        elevation: 5,
        padding: 20,
        borderRadius: 3
    },
    input: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginVertical: 10
    }
})

const numberContainer = StyleSheet.create({
    container: {
        width: 300,
        maxWidth: '80%',
        marginVertical: 10,
    },
    text: {
        fontSize: 17,
        textAlign: 'center',
    },
    number: {
        fontSize: 30,
        textAlign: 'center',
        color: Colors.secondary
    },
    numberContainer: {
        alignSelf: 'center',
        marginVertical: 10,
        paddingVertical: 10,
        paddingHorizontal: 18,
        borderWidth: 2,
        borderRadius: 5,
        borderColor: Colors.secondary
    },
})

export {
    main,
    header,
    startGame,
    gameRunning,
    gameOver,
    cardView,
    numberContainer
}