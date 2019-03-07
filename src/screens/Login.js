import React, { Component } from 'react';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { login } from '../ducks/auth';
import { COLORS } from '../styles/colors';
import { common } from '../styles/common';
import { styles } from '../styles/login';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onLoginPressed = this.onLoginPressed.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        return null;
    }

    onLoginPressed() {
        this.props.login();
    }

    render() {
        return (
            <SafeAreaView style={common.container}>
                <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
                <View style={common.centeredContainer}>
                    <TouchableOpacity onPress={this.onLoginPressed} style={styles.loginButton}>
                        <Text style={styles.loginButtonText}>Login</Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: () => dispatch(login())
    };
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
