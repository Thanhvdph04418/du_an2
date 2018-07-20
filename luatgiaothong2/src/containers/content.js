import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    Dimensions,
    FlatList,
    TouchableOpacity,
    ScrollView

} from 'react-native';
import { Container, Header, Body, Title, Left, Right, Button, Icon, Content, Item, Input } from 'native-base';
var width = Dimensions.get('window').width
var height = Dimensions.get('window').height

export default class TextContent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colorBg: false
        }
    }

    render() {
        return (
            <Container
            >
                <Header
                    androidStatusBarColor={'#AA0000'}
                    style={{ backgroundColor: '#AA0000' }}>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={() => {
                            this.props.navigation.pop()
                        }}>
                            <Icon name='ios-arrow-back' />
                        </Button>
                    </Left>

                    <Body style={{ flex: 3, alignItems: 'center' }}>
                        <Title>Nội dung</Title>
                    </Body>
                    <Right style={{ flex: 1 }}>
                        <Button transparent onPress={() => { this.setState({ colorBg: !this.state.colorBg }) }}>
                            <Icon name='ios-bulb' />
                        </Button>
                    </Right>
                </Header>
                <ScrollView style={{ backgroundColor: this.state.colorBg ? '#111111' : '#fff' }}>
                    <Text style={{ margin: 20, fontSize: 18, color: this.state.colorBg ? '#FFFFFF' : '#111111' }}>{this.props.navigation.state.params.content}</Text>
                </ScrollView>
            </Container>
        );
    }
}