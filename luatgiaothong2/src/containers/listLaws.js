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
import SearchInput, { createFilter } from 'react-native-search-filter';
const KEYS_TO_FILTERS = ['title'];
export default class ListLaws extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataList: [],
            isLoading: true,
            valueSearch: ''
        }
    }

    componentDidMount() {
        this.getDataList()
    }

    async getDataList() {
        try {
            this.setState({ isLoading: true })
            const data = await fetch(this.props.navigation.state.params.url)
            let responseJson = await data.json();
            console.log(responseJson)
            this.setState({
                dataList: responseJson
            })
            this.setState({ isLoading: false })

        } catch (err) {
            console.log(err)
        }


    }

    render() {
        const filteredData = this.state.dataList.filter(createFilter(this.state.valueSearch, KEYS_TO_FILTERS))
        const { type } = this.props.navigation.state.params
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
                            <Input onChangeText={(text) => { this.setState({ valueSearch: text }) }} placeholder="Search" />
                            <Icon name="ios-search" />
                        </Item>
                        <Button transparent>
                            <Text>Search</Text>
                        </Button>
                    </Header>

                    <FlatList
                        onRefresh={() => { this.getDataList() }}
                        keyExtractor={(item, index) => item.id + ''}
                        refreshing={this.state.isLoading}
                        numColumns={1}
                        data={filteredData}
                        renderItem={({ item, index }) =>
                            <TouchableOpacity
                                onPress={() => { type ? null : this.props.navigation.navigate('textContent', { content: item.content }) }}
                                activeOpacity={type ? 1 : 0.7}
                                style={{ flexDirection: 'row', opacity: 0.8, backgroundColor: '#fff', width: width, height: width / 3.5, margin: 1, alignItems: 'center' }}>
                                {type ?
                                    <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} /> :
                                    <Icon style={{ fontSize: 50, color: '#AA0000', flex: 1, marginLeft: 5 }} name='ios-medal' />
                                }
                                <Text style={{ fontSize: type ? 15 : 20, color: '#111111', textAlign: 'left', flex: 5 }}>{item.title}</Text>
                            </TouchableOpacity >
                        }
                    />

                </ImageBackground>

            </Container>
        );
    }
}