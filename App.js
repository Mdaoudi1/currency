import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet, TextInput, toFixed } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
    state = {
        bal: 'Enter a number here.',
        newBal: '0',
    };

    _handleTextChange = bal => {
        this.setState({ bal });
    };
    changeText = () => {
        this.setState({
            newText:this.state.bal,
        })
    }
    
    usdToEuro = () => {
        this.setState({ 
            newBal: this.state.bal*(.85),
        })
    }
    usdToPound = () => {
        this.setState({ 
            newBal: this.state.bal*(.75),
        })
    }
    usdToRupee = () => {
        this.setState({ 
            newBal: this.state.bal*(67.60),
        })
    }
    usdToAus = () => {
        this.setState({ 
            newBal: this.state.bal*(1.3),
        })
    }
    usdToCan = () => {
        this.setState({ 
            newBal: this.state.bal*(1.2),
        })
    }
    usdToSwiss = () => {
        this.setState({ 
            newBal: this.state.bal*(.99),
        })
    }
    usdToYuan = () => {
        this.setState({ 
            newBal: this.state.bal*(6.4),
        })
    }
    usdToYen = () => {
        this.setState({ 
            newBal: this.state.bal*(110.67),
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    value={this.state.bal}
                    onChangeText={this._handleTextChange}
                    style={{ width: 200, height: 44, padding: 8, borderColor:'gray', borderWidth: 1, }}
                />
                
                <TouchableHighlight
                    onPress={this.changeText}
                >
                    <Text>
                    Enter
                    </Text>
                </TouchableHighlight>
                <Text style={styles.paragraph}>
                    {this.state.newText}
                </Text>
                
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {this.usdToEuro}
                    >
                        <Text style={styles.buttonText}>
                            USD to Euro
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {this.usdToSwiss}
                    >
                        <Text style={styles.buttonText}>
                            USD to Franc
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {this.usdToPound}
                    >
                        <Text style={styles.buttonText}>
                            USD to Pound
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {this.usdToYen}
                    >
                        <Text style={styles.buttonText}>
                            USD to Yen
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {this.usdToRupee}
                    >
                        <Text style={styles.buttonText}>
                            USD to Rupee
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {this.usdToYuan}
                    >
                        <Text style={styles.buttonText}>
                            USD to Yuan
                        </Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {this.usdToAus}
                    >
                        <Text style={styles.buttonText}>
                            USD to Aussie
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {this.usdToCan}
                    >
                        <Text style={styles.buttonText}>
                            USD to Can
                        </Text>
                    </TouchableHighlight>
                </View>
                <Text style={styles.paragraph}>
                    My New Balance:
                </Text>

                <Text style={styles.yikes}>
                    {this.state.newBal}
                </Text>
                
            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-around'
    },
    buttonContainer: {
        flexDirection: 'row',
        
    },
    yikes: {
        color: 'red',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        textAlign: 'justify',
    },
    paragraph: {
        fontWeight: 'bold',
    },
    buttonText: {
        fontWeight: 'bold',
    },
    button: {
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        height: 40,
        width: 100,
        borderColor: 'blue',
        borderWidth: 3,
    }
});