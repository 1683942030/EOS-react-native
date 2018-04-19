import React from 'react';
import { connect } from 'react-redux';
import ReactNative, { Platform, StyleSheet, Text, View, Button } from 'react-native';
import { fetchBlockInfo } from '../actions';

class App extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            payload: ''
        };
    }

    fetchPayload() {
        this.props.store.dispatch(fetchBlockInfo());
    }

    renderPayload() {
        if (this.props.payload) {
            if (this.props.payload.loading) {
                return <Text>Loading...</Text>;
            } 
            else if (this.props.payload.error) {
                return <Text>{this.props.payload.error.toString()}</Text>;
            }
            else {
                return (
                    <View>
                        <Text>this.props.payload.server_version</Text>
                        <Text>this.props.payload.head_block_num</Text> 
                        <Text>this.props.payload.last_irreversible_block_num</Text> 
                        <Text>this.props.payload.head_block_id</Text> 
                        <Text>this.props.payload.head_block_time</Text> 
                        <Text>this.props.payload.head_block_producer</Text> 
                        <Text>this.props.payload.recent_slots</Text> 
                        <Text>this.props.payload.participation_rate</Text> 
                    </View>
                )
            }
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title={'Get Most Recent Block Info'} onPress={() => this.props.getBlockInfo()} style={styles.button} />
                {this.renderPayload()}
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
        payload: state.blockInfo
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getBlockInfo: () => dispatch(fetchBlockInfo())
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

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
