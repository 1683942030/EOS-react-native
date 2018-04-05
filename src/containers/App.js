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

    renderPayload() {
        if (this.props.payload) {
            if (this.props.payload.loading) {
                return <Text>Loading...</Text>;
            } else {
                return <Text>{this.props.payload}</Text>;
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title={'Get Most Recent Block Info'} onPress={() => this.fetchPayload()} style={styles.button} />
                {this.renderPayload()}
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
