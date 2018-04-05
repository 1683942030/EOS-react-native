import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { fetchBlockInfo } from '../actions';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            payload: ''
        };
    }

    fetchPayload() {
        dispatch(fetchBlockInfo());
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title={'Get Most Recent Block Info'} onPress={() => this.fetchPayload()} style={styles.button} />
                {}
                <Text>{this.state.payload}</Text>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        payload: state.payload
    };
}

export default connect(mapStateToProps)(App);

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});
