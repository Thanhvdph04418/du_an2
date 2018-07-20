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

export default class Info extends Component {
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
                <ImageBackground source={require('../img/bg5.jpg')} style={{ flex: 1 }}>
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
                            <Title>Thông tin</Title>
                        </Body>
                        <Right style={{ flex: 1 }}>
                            {/* <Button transparent onPress={() => { this.setState({ colorBg: !this.state.colorBg }) }}>
                            <Icon name='ios-bulb' />
                        </Button> */}
                        </Right>
                    </Header>
                    <View style={{
                        width: '95%',
                        backgroundColor: '#fff',
                        opacity: 0.9,
                        height: height / 2,
                        borderRadius: 15,
                        alignSelf: 'center',
                        marginTop: 20,
                        padding: 20

                    }}>
                        <Text style={{ fontSize: 20, textAlign: 'center', color: '#111111', marginTop: 10 }}>Thông tin ứng dụng</Text>
                        <Text style={{ fontSize: 16, color: '#111111', marginTop: 10 }}>Ứng dụng là 1 sản phẩm của sinh viên Vũ Đình Thanh - ph04418</Text>
                        <Text style={{ fontSize: 16, textAlign: 'left', width: '100%', color: '#111111', marginTop: 10 }}>Số điện thoại :01663958716</Text>
                        <Text style={{ fontSize: 16, textAlign: 'left', width: '100%', color: '#111111', marginTop: 10 }}>email :thanhvdph04418@gmail.com</Text>
                        <Text style={{ fontSize: 16, textAlign: 'right', width: '100%', color: 'black', marginTop: 10 }}>version : v1.0.0</Text>
                    </View>
                </ImageBackground>
            </Container >
        );
    }
}