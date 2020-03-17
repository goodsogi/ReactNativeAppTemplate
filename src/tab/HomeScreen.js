import React, {Component} from 'react'
import {
  Text,
  Image,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Button,
  ScrollView,
  PixelRatio,
  Dimensions,
  ActivityIndicator,
} from 'react-native'
import {CustomHeader} from '../index'
import {RVText} from '../core'
import {IMAGE} from '../constants/Images'
import RecommendedProductListItem from './RecommendedProductListItem' //RecommendedProductListItem 같이 이름은 아무거나 괜찮은 듯
import RealReviewListItem from './RealReviewListItem'
import Dialog, {DialogContent} from 'react-native-popup-dialog'
import ViewPager from '@react-native-community/viewpager'
import AdListItem from './AdListItem'

const BOLD_TEXT = props => (
  <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
)

export class HomeScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {isPopupVisible: false, selectedPageNo: 0, isLoading: true}
  }

  handleViewPagerPageSelected ({event}) {
    //setState를 호출해야 렌더링을 다시 함
    this.setState({selectedPageNo: event.nativeEvent.position})
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

  // componentDidMount () {
  //   //화면 높이와 넓이를 dp값으로 출력
  //   let {height, width} = Dimensions.get('window');
  //     alert('화면높이: ' + height + " 넓이: " + width)

  // }

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
        <CustomHeader
          title=''
          isHome={true}
          navigation={this.props.navigation}
        />
        <ScrollView style={{flex: 1}}>
          <View style={{flexDirection: 'row'}}>
            {/* {'\n'}로 개행 */}
            <Text style={{marginStart: 22, fontSize: 26}}>
              카케어는 어떡하지?{'\n'}고민말고 <BOLD_TEXT>오토카지</BOLD_TEXT>
            </Text>

            <View style={{flex: 1}} />

            <TouchableOpacity
              style={[styles.circleImgContainer, styles.carImgContainer]}
              onPress={() => navigation.navigate('EventDetail')}>
              <Image source={IMAGE.ICON_CAR} style={styles.carImg} />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', marginTop: 40, marginStart: 25}}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <TouchableOpacity
                style={styles.circleImgContainer2}
                onPress={() => this.props.navigation.navigate('ChooseCar')}>
                {/* <Image source={IMAGE.ICON_CAR} style={styles.carImg} /> */}
              </TouchableOpacity>
              <Text style={styles.menuText}>출장 세차</Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginStart: 30,
              }}>
              <TouchableOpacity
                style={styles.circleImgContainer2}
                onPress={() => this.props.navigation.navigate('HomeDetail')}>
                {/* <Image source={IMAGE.ICON_CAR} style={styles.carImg} /> */}
              </TouchableOpacity>
              <Text style={styles.menuText}>로드샵 세차</Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                marginStart: 30,
              }}>
              <TouchableOpacity
                style={styles.circleImgContainer2}
                onPress={() => this.props.navigation.navigate('HomeDetail')}>
                {/* <Image source={IMAGE.ICON_CAR} style={styles.carImg} /> */}
              </TouchableOpacity>
              <Text style={styles.menuText}>케어몰</Text>
            </View>
          </View>
          <Text
            style={{
              marginStart: 24,
              fontSize: 24,
              fontWeight: 'bold',
              marginTop: 55,
            }}>
            추천상품
          </Text>
          {/* ListItem으로 {'\n'}를 넘기지 못함  */}
          <FlatList
            style={{height: 339, flexGrow: 0, marginTop: 20}}
            data={this.state.dataSource}
            renderItem={({item}) => (
              //{를 치면 안되고 바로 태그를 리턴해야 하는 듯
              //속성으로 지정하고 ListItem 스크립트에서 매개변수()로 받을 수 있는 듯

              //navigation을 RecommendedProductListItem으로 넘겨서는 작동하지 않음
              //RecommendedProductListItem를 TouchableOpacity로 감싸서 onPress 처리해야 작동
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('EventDetail', item)
                }>
                <RecommendedProductListItem item={item} />
              </TouchableOpacity>
            )}
            horizontal={true}
          />

          <View
            style={{
              flexDirection: 'row',
              marginStart: 23,
              marginTop: 53,
              alignItems: 'center',
            }}>
            <Image source={IMAGE.ICON_SUN} style={{width: 56, height: 43}} />
            <Text style={{marginStart: 7, fontSize: 47, color: '#606060'}}>
              12.3°
            </Text>

            <Text style={{marginStart: 16, fontSize: 21, fontWeight: 'bold'}}>
              강남구{'\n'}오늘 비가 옵니다.
            </Text>
          </View>
          {/* width를 지정하지 않으면 margin값을 제외한 전체를 차지하는 듯 */}

          {/* alignItems를 center로 지정하면 horizontal 중간에 배치하고 justifyContent를 center로 지정하면 vertical 중간에 배치하나? */}
          <TouchableOpacity
            style={{
              height: 54,
              marginTop: 21,
              marginStart: 21,
              marginEnd: 21,
              backgroundColor: '#ebebeb',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 3,
            }}
            onPress={() => {
              this.setState({isPopupVisible: true})
            }}>
            <Text style={{fontSize: 19, color: '#4a4a4a'}}>
              세차 50% 쿠폰받기
            </Text>
          </TouchableOpacity>

          <Dialog
            visible={this.state.isPopupVisible}
            onTouchOutside={() => {
              this.setState({isPopupVisible: false})
            }}>
            <DialogContent>
              <View
                style={{
                  height: 128,
                  width: 240,
                }}
              />
            </DialogContent>
          </Dialog>

          {/* <View>와 </View> 태그사이에 공백이 있으면 텍스트로 인식하여 오류 발생 */}
          <ViewPager
            style={{flex: 1, height: 129, marginTop: 63}}
            initialPage={0}
            onPageSelected={event => {
              this.handleViewPagerPageSelected({event})
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('EventDetail', {key: '1'})
              }}>
              <AdListItem key='1' />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('EventDetail')
              }}>
              <AdListItem key='2' />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('EventDetail')
              }}>
              <AdListItem key='3' />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('EventDetail')
              }}>
              <AdListItem key='4' />
            </TouchableOpacity>
          </ViewPager>

          <View style={{flexDirection: 'row', marginStart: 25, marginTop: -29}}>
            <View
              style={{
                width: 9,
                height: 9,
                borderRadius: 5,
                backgroundColor:
                  this.state.selectedPageNo == 0 ? 'white' : '#616161',
              }}
            />
            <View
              style={{
                width: 9,
                height: 9,
                marginLeft: 3,
                borderRadius: 5,
                backgroundColor:
                  this.state.selectedPageNo == 1 ? 'white' : '#616161',
              }}
            />
            <View
              style={{
                width: 9,
                height: 9,
                marginLeft: 3,
                borderRadius: 5,
                backgroundColor:
                  this.state.selectedPageNo == 2 ? 'white' : '#616161',
              }}
            />
            <View
              style={{
                width: 9,
                height: 9,
                marginLeft: 3,
                borderRadius: 5,
                backgroundColor:
                  this.state.selectedPageNo == 3 ? 'white' : '#616161',
              }}
            />
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginStart: 24,
              marginEnd: 21,
              marginTop: 44,
              alignItems: 'flex-end',
            }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
              }}>
              리얼후기
            </Text>

            <View
              style={{
                flex: 1,
              }}
            />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('RealReview')}>
              <Text
                style={{
                  fontSize: 17,
                  color: '#c7c7c7',
                }}>
                더보기
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            style={{height: 339, marginTop: 17, flexGrow: 0}}
            data={this.state.dataSource}
            renderItem={({item}) => (
              //{를 치면 안되고 바로 태그를 리턴해야 하는 듯
              //속성으로 지정하고 ListItem 스크립트에서 매개변수()로 받을 수 있는 듯

              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('RealReviewDetail', item)
                }>
                <RealReviewListItem item={item} />
              </TouchableOpacity>
            )}
            horizontal={true}
          />

          <View
            style={{
              flexDirection: 'row',
              marginStart: 24,
              marginEnd: 21,
              marginTop: 55,
              alignItems: 'flex-end',
            }}>
            <Text
              style={{
                fontSize: 24,
                fontWeight: 'bold',
              }}>
              디테일러의 꿀팁
            </Text>

            <View
              style={{
                flex: 1,
              }}
            />
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('GoodTipDetail')}>
              <Text
                style={{
                  fontSize: 17,
                  color: '#c7c7c7',
                }}>
                더보기
              </Text>
            </TouchableOpacity>
          </View>

          <Image
            source={IMAGE.PIC_GOOD_TIP}
            style={{
              marginTop: 25,
              width: '100%',
              height: 221,
            }}
          />

          <View
            style={{
              marginTop: -42,
              marginStart: 20,
              width: '100%',
              height: 528,
              backgroundColor: 'white',
              cornerRadius: 3,
            }}>
            <Text
              style={{
                marginTop: 26,
                marginStart: 21,
                fontSize: 21,
                fontWeight: 'bold',
              }}>
              자동차 철분제거제{'\n'}어디에 쓸까?
            </Text>

            <Text
              style={{
                marginTop: 18,
                marginStart: 21,
                marginEnd: 21,
                fontSize: 15,
                color: '#afafaf',
              }}>
              지워지지 않는 자국?{'\n'}세차를 할 때 보통 물과 카샴푸, 약품들을
              이용하는데{'\n'}이러한 것으로도 잘 사라지지 않는 자국이
              있습니다...
            </Text>

            <Text
              style={{
                marginTop: 36,
                marginStart: 21,
                fontSize: 16,
                fontWeight: 'bold',
              }}>
              추천상품
            </Text>

            <View style={{flexDirection: 'row'}}>
              <View style={[styles.productCircleImgContainer]}>
                <Image source={IMAGE.ICON_PRODUCT} style={styles.productImg} />
              </View>
              <View>
                <Text
                  style={{
                    marginTop: 25,
                    marginStart: 12,
                    fontSize: 15,
                    color: '#bebebe',
                  }}>
                  글로스브로
                </Text>
                <Text
                  style={{
                    marginTop: 3,
                    marginStart: 12,
                    fontSize: 17,
                    color: '#ababab',
                    fontWeight: 'bold',
                  }}>
                  익스트림 철분제거제
                </Text>
                <Text
                  style={{
                    marginTop: 7,
                    marginStart: 12,
                    fontSize: 17,
                    fontWeight: 'bold',
                  }}>
                  59,900원
                </Text>
              </View>
            </View>

            <View style={{marginStart: 21, marginTop: 13}}>
              <View
                style={{
                  height: 1 / PixelRatio.get(),
                  backgroundColor: '#bebebe',
                }}
              />
            </View>

            <View style={{flexDirection: 'row'}}>
              <View style={[styles.productCircleImgContainer]}>
                <Image source={IMAGE.ICON_PRODUCT} style={styles.productImg} />
              </View>
              <View>
                <Text
                  style={{
                    marginTop: 25,
                    marginStart: 12,
                    fontSize: 15,
                    color: '#bebebe',
                  }}>
                  글로스브로
                </Text>
                <Text
                  style={{
                    marginTop: 3,
                    marginStart: 12,
                    fontSize: 17,
                    color: '#ababab',
                    fontWeight: 'bold',
                  }}>
                  익스트림 철분제거제
                </Text>
                <Text
                  style={{
                    marginTop: 7,
                    marginStart: 12,
                    fontSize: 17,
                    fontWeight: 'bold',
                  }}>
                  59,900원
                </Text>
              </View>
            </View>
            {/* //색상값은 "#<RGB색상표값>"으로 지정할 수 있음. 예을 들어 "#149494". 하지만 안드로이드와 달리 알파값은 적용 불가
            //알파값을 적용하려면 rgba(,,,)를 사용해야 함  */}
            <TouchableOpacity
              style={{
                marginTop: 23,
                marginStart: 2,
                marginEnd: 40,
                height: 51,
                borderRadius: 2,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ebebeb',
              }}
              onPress={() => this.props.navigation.navigate('HomeDetail')}>
              {/* 아이폰은 상관없으나 안드로이드폰의 경우 fontWeight, fontStyle등의 속성을 사용하면 커스텀폰트가 표시안됨 */}
              <Text style={{fontSize: 19, color: '#878787'}}>
                상품 구매하러 가기
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  carImgContainer: {
    marginEnd: 20,
  },
  circleImgContainer: {
    height: 62,
    width: 62,
    backgroundColor: '#eaeaee',
    borderRadius: 31,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleImgContainer2: {
    height: 67,
    width: 67,
    backgroundColor: '#d8d8d8',
    borderRadius: 34,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImgContainer: {
    margin: 20,
  },
  productCircleImgContainer: {
    height: 93,
    width: 93,
    marginTop: 13,
    marginStart: 21,
    borderRadius: 47,
    borderWidth: 1 / PixelRatio.get(), //React Native에서 정수로 지정한 값은 모두 dp임. 정수값/PixelRatio.get()를 하면 pixel값을 얻을 수 있음
    borderColor: '#bebebe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  carImg: {
    height: 33,
    width: 33,
  },
  productImg: {
    height: 67,
    width: 67,
    resizeMode: 'contain',
  },
  menuText: {fontSize: 20, marginTop: 9},
})
