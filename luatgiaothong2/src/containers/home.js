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
import { Container, Header, Body, Title, Left, Right, Button, Icon, Content } from 'native-base';
var width = Dimensions.get('window').width
var height = Dimensions.get('window').height
import Share from 'react-native-share';
const shareOptions = {
    title: "Chia sẻ ứng dụng ",
    message: "Xin mời chọn hình thức chia sẻ",
    url: "https://github.com/Thanhvdph04418/du_an2",
    subject: "Share Link" //  for email
}

var category = [
    {
        name: 'Quy tắc giao thông đường bộ',
        icon: 'ios-bus',
        onClick: (navigation) => { navigation.navigate('listLaws', { url: 'https://chayandroid.000webhostapp.com/quytacgiaothong.php' }) }
    },
    {
        name: 'Phương tiện tham gia giao thông đường bộ',
        icon: 'ios-bicycle',
        onClick: (navigation) => { navigation.navigate('listLaws', { url: 'https://chayandroid.000webhostapp.com/phuongtienthamgia.php' }) }

    },
    {
        name: 'Người điều khiển phương tiện',
        icon: 'ios-body',
        onClick: (navigation) => { navigation.navigate('listLaws', { url: 'https://chayandroid.000webhostapp.com/nguoidieukhien.php' }) }
    },
    {
        name: 'Biển báo giao thông',
        icon: 'ios-warning',
        onClick: (navigation) => { navigation.navigate('listLaws', { url: 'https://chayandroid.000webhostapp.com/bienbao.php', type: 'bienbao' }) }
    },
    {
        name: 'Kiểm tra khả năng nhận biết biển báo ',
        icon: 'ios-school',
        onClick: (navigation) => { navigation.navigate('practice') }
    },
    {
        name: 'Thông tin ứng dụng',
        icon: 'ios-information-circle-outline',
        onClick: (navigation) => { navigation.navigate('listLaws') }
    },
]
export default class Home extends Component {




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
                                Share.open(shareOptions)
                                    .then((res) => { console.log(res) })
                                    .catch((err) => { err && console.log(err); });
                            }}>
                                <Icon name='md-share' />
                            </Button>
                        </Left>

                        <Body style={{ flex: 3, alignItems: 'center' }}>
                            <Title>Học Luật giao thông</Title>
                        </Body>
                        <Right style={{ flex: 1 }}>
                            <Button transparent>
                                <Icon name='ios-power' />
                            </Button>
                        </Right>
                    </Header>

                    <Image style={{ width, height: height / 3.5 }} source={require('../img/banner.jpg')} />
                    <FlatList
                        keyExtractor={(item, index) => index + ''}
                        numColumns={2}
                        data={category}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity
                                onPress={() => { item.onClick(this.props.navigation) }}
                                activeOpacity={0.7}
                                style={{ opacity: 0.8, backgroundColor: '#fff', width: width / 2, height: width / 3, margin: 1, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon style={{ fontSize: 50, color: '#AA0000' }} name={item.icon} />
                                <Text style={{ fontSize: 15, color: '#111111', textAlign: 'center' }}>{item.name}</Text>
                            </TouchableOpacity >
                        }
                    />

                </ImageBackground>

            </Container>
        );
    }
}