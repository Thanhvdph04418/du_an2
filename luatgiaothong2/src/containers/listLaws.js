import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    Dimensions,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { Container, Header, Body, Title, Left, Right, Button, Icon, Content, Item, Input } from 'native-base';
var width = Dimensions.get('window').width
var height = Dimensions.get('window').height
var category = [
    {
        name: 'Quy tắc giao thông đường bộ',
        icon: 'ios-medal'
    },
    {
        name: 'Phương tiện tham gia giao thông đường bộ',
        icon: 'ios-medal'
    },
    {
        name: 'Người điều khiển phương tiện',
        icon: 'ios-medal'
    },
    {
        name: 'Biển báo giao thông',
        icon: 'ios-medal'
    },
    {
        name: 'Kiểm tra khả năng nhận biết biển báo adsadadsd sadsadsad adsadas ',
        icon: 'ios-medal'
    },
    {
        name: 'Chia sẻ ứng dụng',
        icon: 'ios-medal'
    },
]
export default class ListLaws extends Component {
    render() {
        return (
            <Container
            >
                <ImageBackground source={require('../img/bg5.jpg')} style={{ flex: 1 }}>
                    <Header searchBar rounded
                        androidStatusBarColor={'#AA0000'}
                        style={{ backgroundColor: '#AA0000' }}
                    >
                        <Item>
                            <Icon onPress={() => { this.props.navigation.pop() }} name="ios-arrow-back" />
                            <Input placeholder="Search" />
                            <Icon name="ios-search" />
                        </Item>
                        <Button transparent>
                            <Text>Search</Text>
                        </Button>
                    </Header>

                    <FlatList
                        keyExtractor={(item, index) => index + ''}
                        numColumns={1}
                        data={category}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity
                                activeOpacity={0.7}
                                style={{ flexDirection: 'row', opacity: 0.8, backgroundColor: '#fff', width: width, height: width / 3.5, margin: 1, alignItems: 'center' }}>
                                <Icon style={{ fontSize: 50, color: '#AA0000', flex: 1, marginLeft: 5 }} name={item.icon} />
                                <Text style={{ fontSize: 20, color: '#111111', textAlign: 'left', flex: 5 }}>{item.name}</Text>
                            </TouchableOpacity >
                        }
                    />

                </ImageBackground>

            </Container>
        );
    }
}