import React, {Component} from 'react'
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import {IMAGE} from './constants/Images'

export class CustomHeader2 extends Component {


  handlePress = () => {
    this.props.onPress?.();
  } 


  render () {
    let {navigation, isNeedAddButton, title} = this.props
    return (
      <View style={{flexDirection: 'row', height: 70, alignItems: 'center', backgroundColor: 'white'}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{
              width: 20,
              height: 20,
              marginStart: 16,
              resizeMode: 'contain',
            }}
            source={IMAGE.ICON_BACK_GRAY}
          />
        </TouchableOpacity>

        <Text
          style={{flex: 1, marginStart: 12, fontSize: 18, fontWeight: 'bold'}}>
          {title}
        </Text>

        {isNeedAddButton ? (
          <TouchableOpacity onPress={this.handlePress}>
            <Image
              style={{
                width: 20,
                height: 20,
                marginEnd: 12,
                resizeMode: 'contain',
              }}
              source={IMAGE.ICON_ADD}
            />
          </TouchableOpacity>
        ) : (
          <View/>
        )}
      </View>
    )
  }
}
