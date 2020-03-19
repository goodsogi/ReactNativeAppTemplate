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
import OptionListItem from './OptionListItem'

export class ChooseOptionScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      isOneTimeCarWashSelected: true,
      isPeriodicCarWashSelected: false,
    }

    //alert("선택한 차량정보: " + this.props.route.params.title);
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
    this.setState({
      isOneTimeCarWashSelected: true,
      isPeriodicCarWashSelected: false,
    })
  }

  handlePeriodicCarWashSelected () {
    this.setState({
      isOneTimeCarWashSelected: false,
      isPeriodicCarWashSelected: true,
    })
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
          title='옵션선택'
          isNeedAddButton={false}
          fruit='apple'
          navigation={this.props.navigation}
        />

        <View style={{height: 1, backgroundColor: '#e7e7e7'}} />
        <View
          style={{
            height: 135,
            flexDirection: 'row',        
            backgroundColor: 'white',
          }}>
          <View style={{marginTop: 37, marginStart: 18}}>
            <Text style={{fontSize: 27}}>외부세차</Text>
            <Text style={{fontSize: 22, fontWeight: 'bold'}}>100,000원~</Text>
          </View>
          <View style={{flex: 1}} />
          <View
            style={{flexDirection: 'row', alignItems: 'center', marginTop: 24, marginEnd: 22}}>
            <View
              style={{
                width: 28,
                height: 28,
                borderRadius: 14,
                backgroundColor: '#eeeeee',
              }}
            />
            <Text style={{marginStart: 7, fontSize: 14, color: '#3f3f3f'}}>30분 소요</Text>
          </View>
        </View>
        <View style={{height: 7, backgroundColor: '#f6f6f6'}} />

        <Text
          style={{
            marginStart: 20,
            marginTop: 20,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          옵션 선택
        </Text>

        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => (
            //{를 치면 안되고 바로 태그를 리턴해야 하는 듯
            //속성으로 지정하고 ListItem 스크립트에서 매개변수()로 받을 수 있는 듯

            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('RealReviewDetail', item)
              }>
              <OptionListItem item={item} />
            </TouchableOpacity>
          )}
        />

         <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            style={{
              height: 70,
              flex: 1,
              backgroundColor: '#434343',
              alignItems: 'center',
              justifyContent: 'center'  
            }}
            onPress={() => this.handleOneTimeCarWashSelected()}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              149,000원
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
               height: 70,
              flex: 1,
              backgroundColor: 'black',
              alignItems: 'center',
              justifyContent: 'center'  
            }}
            // params가 여러 개인 경우 []로 위치를 지정해야 함 
            onPress={() =>  this.props.route.params[1].from == 'mobile'? this.props.navigation.navigate('ChooseDate'):this.props.navigation.navigate('ChooseDateInShop')}>
            <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
              예약하기
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}
