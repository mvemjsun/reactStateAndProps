import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableHighlight } from 'react-native';
import MyUtility from './MyUtil'
import PropTypes from 'prop-types';

export default class MyComponent extends Component {

    constructor(props) {
        super(props)
        this.state = { words: [], currentWord: '' }
        this._addWord = this._addWord.bind(this)
        // this._currentWord = this._currentWord.bind(this)
    }
    _width(ratio) {
        return MyUtility.dimension().width * ratio
    }

    _height(ratio) {
        return MyUtility.dimension().height * ratio
    }

    _currentWord(word) {
        this.setState((prevState) => {
            let newState = {words: prevState.words, currentWord: word}
            return newState
        })
    }
    _addWord() {
        this.setState((prevState) => {
            if (prevState.currentWord.length === 0) {
                return prevState
            } else {
            prevState.words.push(`[${this.state.currentWord}] `)
            prevState.currentWord = ''
            return { words: prevState.words, currentWord: prevState.currentWord }
            }
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={[styles.section1, {width: this._width(0.7)}]}>
                    <Text style={styles.labelText}>{this.props.labelText}</Text>
                    <TextInput style={[styles.textInput, { width: this._width(0.65)} ]}
                    value={this.state.currentWord}
                    onChangeText={(text) => {
                        this._currentWord(text)
                    }}></TextInput>
                    <TouchableHighlight style={styles.touchableArea}>
                        <Button style={styles.button} title={this.props.buttonText} onPress={this._addWord}/>
                    </TouchableHighlight>
                </View>
                <View style={[styles.section2, {width: this._width(0.7)}]}>
                    <Text>{this.state.words}</Text>
                </View>
            </View>
        );
    }
}

MyComponent.propTypes = {
    labelText: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderWidth: 2,
        borderRadius: 10,
        justifyContent: "space-around",
        marginBottom: 5
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    labelText: {
        fontWeight: "bold",
        marginBottom: 5,
        fontSize: 20
    },
    textInput: {
        borderWidth: 1,
        width: 150,
        height: 40,
        textAlign: 'center'
    },
    button: {
        margin: 5
    },
    section1: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.40,
        backgroundColor: 'yellow',
        marginBottom: 5
    },
    section2: {
        alignItems: 'center',
        backgroundColor: 'lightgreen',
        justifyContent: "flex-start",
        flex: 0.5,
        margin: 5,
        fontSize: 30
    },
    touchableArea: {
        borderRadius: 5,
        backgroundColor: 'orange',
        margin: 3
    }
});
