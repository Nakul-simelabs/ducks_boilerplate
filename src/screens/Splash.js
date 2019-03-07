import React, { Component } from 'react';
import { StatusBar, Text } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetNavigation } from '../common/utils';
import { COLORS } from '../styles/colors';
import { common } from '../styles/common';

class Splash extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.delayNavigation = this.delayNavigation.bind(this);
    }

    static getDerivedStateFromProps(props, state) {
        return null;
    }

    componentDidMount = async () => {
        //Delay navigation so the user can see the splash screen
        this.delayNavigation();
    };

    delayNavigation() {
        setTimeout(() => {
            resetNavigation(this.props.navigation, 'Login');
        }, 1000);
    }

    render() {
        return (
            <SafeAreaView style={common.centeredContainer}>
                <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
                <Text>Splash Screen</Text>
            </SafeAreaView>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({}, dispatch);
};

const mapStateToProps = state => ({
    user: state.user
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Splash);
