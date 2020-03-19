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
  StyleSheet,
  Dimensions,
} from 'react-native'
import {CustomHeader2} from '../index'
import ProductListItem from './ProductListItem'
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps'
import {IMAGE} from '../constants/Images'

export class ChooseProductInShopScreen extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isLoading: true,
      isOneTimeCarWashSelected: true,
      isPeriodicCarWashSelected: false,
      selectedTabNo: 0,
    }

    alert('선택한 차량정보: ' + this.props.route.params.title)
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

  handleTabSelected (selectedTabNo) {
    this.setState({
      selectedTabNo: selectedTabNo,  
    })
  }

  handlePeriodicCarWashSelected () {
    this.setState({
      isOneTimeCarWashSelected: false,
      isPeriodicCarWashSelected: true,
    })
  }

  render () {
    const dimensions = Dimensions.get('window')
    const imageWidth = (dimensions.width - 19 - 20 - 9) / 4

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
          title='상품 선택'
          isNeedAddButton={false}
          fruit='apple'
          navigation={this.props.navigation}
        />

        <Image
          style={{width: '100%', height: 174}}
          source={IMAGE.PIC_BIG_CAR_2}
        />

        <View
          style={{
            flexDirection: 'row',
            marginTop: 25,
          }}>
          <View
            style={{
              flex: 1,
              marginStart: 21,
              marginEnd: 21,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 27,
              }}>
              오토카지 강남 1호점
            </Text>

            <View style={{flexDirection: 'row', marginTop: 7}}>
              <Text
                style={{
                  fontSize: 17,
                }}>
                6.2km
              </Text>
              <Text
                style={{
                  marginStart: 10,
                  fontSize: 17,
                  color: '#a9a9a9',
                }}>
                풀디테일링
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              width: 54,
              height: 54,
              borderRadius: 27,
              borderWidth: 1,
              marginEnd: 21,
              borderColor: '#ececec',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => this.props.navigation.navigate('EventDetail', item)}>
            <Image
              style={{
                width: 26,
                height: 26,
              }}
              source={IMAGE.ICON_PIN}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 2,
            marginStart: 18,
            marginEnd: 18,
            marginTop: 27,
            backgroundColor: '#e8e8e8',
          }}
        />

        <Text
          style={{
            marginStart: 19,
            marginTop: 18,
            fontSize: 16,
          }}>
          매장사진
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginStart: 19,
            marginEnd: 20,
            marginTop: 10,
          }}>
          <TouchableOpacity
            style={{
              width: imageWidth,
              height: imageWidth,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => this.props.navigation.navigate('EventDetail', item)}>
            <Image
              style={{
                width: imageWidth,
                height: imageWidth,
              }}
              source={IMAGE.PIC_GOOD_TIP}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: imageWidth,
              height: imageWidth,
              marginStart: 3,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => this.props.navigation.navigate('EventDetail', item)}>
            <Image
              style={{
                width: imageWidth,
                height: imageWidth,
              }}
              source={IMAGE.PIC_GOOD_TIP}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: imageWidth,
              height: imageWidth,
              marginStart: 3,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => this.props.navigation.navigate('EventDetail', item)}>
            <Image
              style={{
                width: imageWidth,
                height: imageWidth,
              }}
              source={IMAGE.PIC_GOOD_TIP}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: imageWidth,
              height: imageWidth,
              marginStart: 3,
              backgroundColor: '#9d9d9d',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => this.props.navigation.navigate('EventDetail', item)}>
            <Text
              style={{
                fontSize: 29,
                color: 'white',
              }}>
              +5
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginTop: 19,
          }}>
          <View
            style={{
              height: 2,
              backgroundColor: '#f0f0f0',
            }}
          />
          <View
            style={{
              height: 9,
              backgroundColor: '#f6f6f6',
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 21,
            marginStart: 18
          }}>
          <TouchableOpacity
            style={{
              width: 36,
              height: 24,
            }}  onPress={() => this.handleTabSelected(0)}>
            <Text
              style={{
                height: 20,
                fontSize: 17,
                textAlign: 'center',
                color: this.state.selectedTabNo == 0 ? 'black' : '#ababab',
              }}>
              세차
            </Text>
            <View
              style={{
                width: 36,
                height: 4,
                backgroundColor: this.state.selectedTabNo == 0 ? 'black' : 'white',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 36,
              height: 24,
              marginStart: 34,
            }}  onPress={() => this.handleTabSelected(1)}>
            <Text
              style={{
                height: 20,
                fontSize: 17,
                textAlign: 'center',
                color: this.state.selectedTabNo == 1 ? 'black' : '#ababab',
              }}>
              광택
            </Text>
            <View
              style={{
                width: 36,
                height: 4,
                backgroundColor: this.state.selectedTabNo == 1 ? 'black' : 'white',
              }}
            />
          </TouchableOpacity>
        </View>
 <View
            style={{
              height: 2,
              marginTop: 15, 
              backgroundColor: '#f6f6f6',
            }}
          />
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
                this.props.navigation.navigate('ChooseOption', [item, {'from':'shop'}])
              }>
              <ProductListItem item={item} />
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
        shadowColor: 'rgb(50, 50, 50)',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: {
          height: -1,
          width: 0,
        },
      },
      android: {
        elevation: 5,
      },
    }),
  },
})
