import React, { Component } from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    Dimensions,
    Alert
} from 'react-native';
import { Container, Header, Body, Title, Left, Right, Button, Icon, Content, Item, Input } from 'native-base';
var width = Dimensions.get('window').width
var height = Dimensions.get('window').height
import RadioForm from 'react-native-simple-radio-button';
var radio_props = [
    { label: 'Đáp án 1', value: 1 },
    { label: 'Đáp án 2', value: 2 },
    { label: 'đáp án 3', value: 3 }
];

var arr = [
    {
        id: 1,
        img: 'http://www.luatgiaothongduongbo.net/img1/store/Bien_bao_cam/101.gif',
        answer1: 'bien báo cấm đường ',
        answer2: 'bien báo cấm vượt',
        answer3: 'bien báo cấm đi ngược chiều',
        answerOk: 1,
    },
    {
        id: 2,
        img: 'http://www.luatgiaothongduongbo.net/img1/store/Bien_bao_cam/101.gif',
        answer1: 'bien báo cấm đường 10',
        answer2: 'bien báo cấm đường 10',
        answer3: 'bien báo cấm đường 30',
        answerOk: 3,
    }
]


export default class Practice extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOk: false,
            page: 1,
            isSelect: false,
            answerCount: 0
        }
    }


    answerClick() {
        if (!this.state.isSelect) return Alert.alert(
            'Thông báo',
            'Vui lòng chọn 1 đáp án',
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
        if (!this.state.isOk) return Alert.alert(
            'Thông báo',
            'Bạn đã trả lời sai',
            [
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
        this.setState({
            page: this.state.page + 1,
            isOk: false,
            isSelect: false,
            answerCount: this.state.answerCount + 1
        })
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
                            <Title>Kiểm tra kiến thức</Title>
                        </Body>
                        <Right style={{ flex: 1 }}>
                            {/* <Button transparent>
                                <Icon name='ios-power' />
                            </Button> */}
                        </Right>
                    </Header>
                    {arr.map(item => {
                        return item.id == this.state.page ?
                            <View key={item.id}>
                                <View style={{ backgroundColor: '#fff', width: '95%', alignSelf: 'center', marginTop: 20, borderRadius: 15, alignItems: 'center', justifyContent: 'center', paddingBottom: 20 }}>
                                    <Text style={{ fontSize: 20 }}>Biển báo sau đây là biển báo nào</Text>
                                    <Image
                                        style={{ width: height / 4, height: height / 4, marginTop: 10 }}
                                        source={{ uri: item.img }}
                                    />
                                    <Text style={{ fontSize: 18, marginLeft: 20, textAlign: 'left', width: '100%' }}>1: {item.answer1}</Text>
                                    <Text style={{ fontSize: 18, marginLeft: 20, textAlign: 'left', width: '100%' }} >2:  {item.answer2}</Text>
                                    <Text style={{ fontSize: 18, marginLeft: 20, textAlign: 'left', width: '100%' }} >3:  {item.answer3}</Text>
                                </View>
                                <View style={{ backgroundColor: '#fff', width: '95%', height: width / 5, alignSelf: 'center', marginTop: 20, borderRadius: 15, justifyContent: 'center', alignItems: 'center', }}>
                                    <Text style={{ color: 'black', position: 'absolute', fontSize: 15, left: 10, top: 5 }}>Đáp án:</Text>
                                    <RadioForm
                                        labelStyle={{ marginRight: 20 }}
                                        style={{ marginTop: 20 }}
                                        radio_props={radio_props}
                                        initial={this.state.indexInit}
                                        formHorizontal={true}
                                        onPress={(value) => { value == item.answerOk ? this.setState({ isOk: true, isSelect: true }) : this.setState({ isOk: false, isSelect: true }) }}
                                    />
                                </View>
                            </View> : null
                    })}


                    <Button style={{ alignSelf: 'center', width: width / 2, marginTop: 20 }} danger onPress={() => { this.answerClick() }}>
                        <Text style={{ fontSize: 18, color: '#fff', textAlign: 'center', width: '100%' }}> Tiếp tục </Text>
                    </Button>

                </ImageBackground>

            </Container>
        );
    }
}