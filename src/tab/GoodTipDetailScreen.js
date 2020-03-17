import React, {Component} from 'react'
import {
  Text,
  Image,
  View,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  PixelRatio,
  ScrollView,
} from 'react-native'
import {CustomHeader} from '../index'
import {IMAGE} from '../constants/Images'

export class GoodTipDetailScreen extends Component {
  render () {
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{width: '100%', height: 258}}>
          <Image
            style={{width: '100%', height: 258}}
            source={IMAGE.PIC_GOOD_TIP}
          />
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              position: 'absolute',
            }}
            onPress={() => this.props.navigation.goBack()}>
            <Image
              style={{
                width: 20,
                height: 20,
                marginStart: 16,
                marginTop: 60,
                resizeMode: 'contain',
              }}
              source={IMAGE.ICON_BACK_WHITE}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            marginStart: 32,
            marginTop: 39,
            fontSize: 29,
            fontWeight: 'bold',
          }}>
          자동차 철분제거제{'\n'}어디에 쓸까?
        </Text>

        {/* fontSize는 측정한 값에 그값의 1/4을 더해야 하는 듯 */}
        <Text
          style={{
            marginTop: 46,
            marginStart: 31,
            marginEnd: 31,
            fontSize: 16,
            color: '#7c7c7c',
          }}>
          지워지지 않는 자국?{'\n'}세차를 할 때 보통 물과...
        </Text>

        <Image
          style={{width: '100%', height: 203, marginTop: 42}}
          source={IMAGE.PIC_GOOD_TIP}
        />
        <Text
          style={{
            marginTop: 44,
            marginStart: 31,
            marginEnd: 31,
            fontSize: 16,
            color: '#7c7c7c',
          }}>
          태끌없이 깨끗한 자동차의 모습은 세차 매니아에게{'\n'}나름의 로망과도
          ...
        </Text>
        <Text
          style={{
            marginTop: 44,
            marginStart: 31,
            fontSize: 17,
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
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  productCircleImgContainer: {
    height: 93,
    width: 93,
    marginTop: 13,
    marginStart: 29,
    borderRadius: 47,
    borderWidth: 1 / PixelRatio.get(), //React Native에서 정수로 지정한 값은 모두 dp임. 정수값/PixelRatio.get()를 하면 pixel값을 얻을 수 있음
    borderColor: '#bebebe',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImg: {
    height: 67,
    width: 67,
    resizeMode: 'contain',
  },
})
