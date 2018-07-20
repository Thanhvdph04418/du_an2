import React, { Component } from 'react';
import {
    View
} from 'react-native';
import Home from './containers/home'
import ListLaws from './containers/listLaws'
import Practice from './containers/practice'
import TextContent from './containers/content'

import { StackNavigator } from 'react-navigation'


const AppNavigator = StackNavigator({
    home: {
        screen: Home
    },
    listLaws: {
        screen: ListLaws
    },
    practice: {
        screen: Practice
    },
    textContent: {
        screen: TextContent
    },

}, {
        headerMode: 'none',
        initialRouteName: 'home'
    })

export default class AppContainer extends Component {
    render() {
        return (
            <AppNavigator />
        );
    }
}