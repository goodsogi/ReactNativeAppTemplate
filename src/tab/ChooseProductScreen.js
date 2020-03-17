import React, {Component} from 'react'
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native'
import {CustomHeader2} from '../index'
import ProductListItem from './ProductListItem'

export class ChooseProductScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      isOneTimeCarWashSelected: true,
      isPeriodicCarWashSelected: false,
    }

    alert("선택한 차량정보: " + this.props.route.params.title);
  }

  componentDidMount () {
    return fetch('https://reactnative.dev/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.movies,
          },
          function () {},
        )
      })
      .catch(error => {
        console.error(error)
      })
  }

  handleOneTimeCarWashSelected () {
this.setState(
          {
            isOneTimeCarWashSelected: true,
            isPeriodicCarWashSelected: false,
          }
        )

  }

  handlePeriodicCarWashSelected () {
this.setState(
          {
            isOneTimeCarWashSelected: false,
            isPeriodicCarWashSelected: true,
          }
        )

  }



  render () {
    if (this.state.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            padding: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <CustomHeader2
          title='상품선택'
          isNeedAddButton={false}
          fruit='apple'
          navigation={this.props.navigation}
        />

        <View style={{height: 1, backgroundColor: '#e7e7e7'}} />
        <View style={{height: 135, flexDirection: 'row', alignItems: 'center', backgroundColor: 'white'}}>
          <TouchableOpacity
            style={{
              height: 83,
              flex: 1,
              marginStart: 20,
              marginEnd: 10,
              borderRadius: 2,
              borderWidth: 1,
              borderColor: this.state.isOneTimeCarWashSelected
                ? 'black'
                : '#e7e7e7',
              alignItems: 'center',
              justifyContent: 'center'  
            }}
            onPress={() => this.handleOneTimeCarWashSelected()}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              1회 세차
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              height: 83,
              flex: 1,
              marginEnd: 20,
              borderRadius: 2,
               borderWidth: 1,
              borderColor: this.state.isPeriodicCarWashSelected
                ? 'black'
                : '#e7e7e7',
              alignItems: 'center',
              justifyContent: 'center'  
            }}
            onPress={() => this.handlePeriodicCarWashSelected()}>
            <Text style={{fontSize: 19, fontWeight: 'bold'}}>
              정기세차
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 7, backgroundColor: '#f6f6f6'}} />

        <Text style={{marginStart: 20, marginTop: 20, fontSize: 20, fontWeight: 'bold'}}>상품 선택</Text>

        <FlatList         
          data={this.state.dataSource}
          renderItem={({item}) => (
            //{를 치면 안되고 바로 태그를 리턴해야 하는 듯
            //속성으로 지정하고 ListItem 스크립트에서 매개변수()로 받을 수 있는 듯

            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('ChooseOption', item)
              }>
              <ProductListItem item={item} />
            </TouchableOpacity>
          )}
        />
       
      </SafeAreaView>
    )
  }
}
