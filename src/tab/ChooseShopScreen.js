import React, {Component} from 'react'
import {
  Text,
  Image,
  View,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
  Platform,
  StyleSheet
} from 'react-native'
import {CustomHeader2} from '../index'
import ShopListItem from './ShopListItem'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {IMAGE} from '../constants/Images'

export class ChooseShopScreen extends Component {
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
          title='샵 선택'
          isNeedAddButton={false}
          fruit='apple'
          navigation={this.props.navigation}
        />

  {/* TODO 나중에 주석푸세요
  구글맵    */}
  {/* <MapView style={{height: 173}} provider={PROVIDER_GOOGLE} /> */}
  {/* TODO 나중에 주석푸세요
  애플맵  */}
  <View style={{height: 173}} >
  <MapView style={{height: 173}}  />
   <TouchableOpacity
              style={styles.expandButton}
              onPress={() => navigation.navigate('EventDetail')}>
              <Image source={IMAGE.ICON_EXPAND} style={{height: 21,
    width: 21,}} />
            </TouchableOpacity>
  </View>
  <View  style={{               
                flexDirection: 'row', 
                marginTop: 21             
              }}>
        <View
              style={{
                width: 105,
                height: 44,             
                flexDirection: 'row',
                marginStart: 18, 
                borderRadius: 22,
                borderWidth: 2,
                borderColor: '#d9d9d9',
                alignItems: 'center',
              }}>
              <Text
                style={{  
                  flex: 1,
                  marginStart: 15,             
                  fontSize: 17,                
                }}>
                거리순
              </Text>
              <Image
                style={{
                  width: 13,
                  height: 13,
                  marginEnd: 12,
                }}
                source={IMAGE.ICON_DOWN_ARROW}
              />
            </View>
             <View
              style={{
                flex: 1,
                height: 44,             
                flexDirection: 'row',
                marginStart: 13,
                marginEnd: 26,
                borderRadius: 22,
                borderWidth: 2,
                borderColor: '#d9d9d9',
                alignItems: 'center',
              }}>
              <Text
                style={{  
                  flex: 1,
                  marginStart: 15,             
                  fontSize: 17,                
                }}>
                지역 전체
              </Text>
              <Image
                style={{
                  width: 13,
                  height: 13,
                  marginEnd: 12,
                }}
                source={IMAGE.ICON_DOWN_ARROW}
              />
            </View>
       </View>

        <FlatList
            style={{marginTop: 2}}
            data={this.state.dataSource}
            renderItem={({item}) => (
              //{를 치면 안되고 바로 태그를 리턴해야 하는 듯
              //속성으로 지정하고 ListItem 스크립트에서 매개변수()로 받을 수 있는 듯

              //navigation을 RecommendedProductListItem으로 넘겨서는 작동하지 않음
              //RecommendedProductListItem를 TouchableOpacity로 감싸서 onPress 처리해야 작동
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('ChooseProductInShop', item)
                }>
                <ShopListItem item={item} />
              </TouchableOpacity>
            )}          
          />

      </SafeAreaView>
    )
  }
}


const styles = StyleSheet.create({
  expandButton: {
    height: 52,
    width: 52,
    marginTop: 98,
    marginStart: 325,
    backgroundColor: 'white',
    borderRadius: 26,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
     ios: {
       shadowColor: "rgb(50, 50, 50)",
       shadowOpacity: 0.5,
       shadowRadius: 5,
       shadowOffset: {
         height: -1,
         width: 0
      }
    },
     android: {
       elevation: 5
    }
  })
  },
  
})

