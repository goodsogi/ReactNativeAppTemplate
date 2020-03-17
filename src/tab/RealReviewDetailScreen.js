import React, {Component} from 'react'
import {Text, Image, View, SafeAreaView, TouchableOpacity} from 'react-native'
import {CustomHeader} from '../index'
import {IMAGE} from '../constants/Images'

export class RealReviewDetailScreen extends Component {
  render () {
    return (
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{width: '100%', height: 258}}>
          <Image
            style={{width: '100%', height: 258}}
            source={IMAGE.PIC_BIG_CAR_2}
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
            marginTop: 31,
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          "{'\n'}소비자의 입장으로{'\n'}잘 봐주셔서{'\n'}감사했습니다!{'\n'}"
        </Text>

        <View
          style={{flexDirection: 'row', marginTop: 35, alignItems: 'center'}}>
          <View
            style={{
              height: 1,
              flex: 1,
              marginStart: 31,
              marginEnd: 13,
              backgroundColor: '#d8d8d8',
            }}
          />
          <View
            style={{
              width: 48,
              height: 48,
              borderRadius: 24,
              backgroundColor: '#d8d8d8',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image style={{width: 23, height: 23}} source={IMAGE.ICON_USER} />
          </View>
          <View
            style={{
              height: 1,
              flex: 1,
              marginStart: 13,
              marginEnd: 31,
              backgroundColor: '#d8d8d8',
            }}
          />
        </View>

        <Text style={{marginTop: 10, fontSize: 12, color: '#afafaf'}}>
          CARZ1234
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
          티끌없이 깨끗한 자동차의 모습은 세차 매니아에게{'\n'}나름의 로망과
          같습니다.
        </Text>
      </View>
    )
  }
}
