import React, {Component} from 'react'
import {Text, View, Image, StyleSheet} from 'react-native'
import {IMAGE} from '../constants/Images'
// Component가 아니라서 props는 사용못하나??
// ()안에 매개변수로 들어오는 듯
// {item}같이 {}를 쳐야 값이 들어옴

const ListItem = ({item}) => {
  const {title} = item
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 100,
        marginStart: 19,
        marginEnd: 19,
        marginTop: 23,
        borderWidth: 1,
        borderColor: '#e8e8e8',
        borderRadius: 2,
      }}>
      <View style={{marginTop: 30, marginStart: 19}}>
        <Text style={{fontSize: 21}}>왁스코팅</Text>
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>60,000원</Text>
      </View>

      <Text
        style={{
          flex: 1,
          marginStart: 13,
          marginTop: 31,
          fontSize: 17,
          color: '#b6b6b6',
        }}>
        30분 소요
      </Text>

      <View
        style={{
          width: 32,
          height: 32,
          marginEnd: 17,
          marginTop: 33, 
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 16,
          backgroundColor: 'black',
        }}>
        <Image style={{width: 19, height: 19}} source={IMAGE.ICON_ADD} />
      </View>
    </View>
  )
}

export default ListItem
