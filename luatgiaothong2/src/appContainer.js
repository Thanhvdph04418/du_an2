import React, { Component } from 'react';
import {
    View
} from 'react-native';
import Home from './containers/home'
import ListLaws from './containers/listLaws'
import { StackNavigator } from 'react-navigation'


const AppNavigator = StackNavigator({
    home: {
        screen: Home
    },
    listLaws: {
        screen: ListLaws
    },

}, {
        headerMode: 'none',
    })

export default class AppContainer extends Component {
    render() {
        return (
            <AppNavigator />
        );
    }
}