import React, {Component} from 'react'
import {Text, View, Image, StyleSheet} from 'react-native'
import {IMAGE} from '../constants/Images'
// Component가 아니라서 props는 사용못하나??
// ()안에 매개변수로 들어오는 듯
// {item}같이 {}를 쳐야 값이 들어옴

// 두개 이상의 매개변수가 있으면 {}안에 같이 지정해야 하는 듯
const ListItem = ({item , isSelected}) => {
  const {title} = item;
  console.log('isSelected: ' + isSelected);
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 136,
        backgroundColor: isSelected? 'gray':'white',
        marginStart: 14,
        marginEnd: 14,
        marginTop: 17,
        alignItems: 'center',
      }}>
      <Image
        style={{
          width: 88,
          height: 88,
          borderRadius: 44,
          marginStart: 20,
          backgroundColor: '#eeeeee',
        }}
      />
      <View
        style={{        
          marginStart: 21,
          marginEnd: 21,
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 19,
          }}>
          아우디 / A3 카브리올레
        </Text>

        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 17,
            color: '#969696',
            marginTop: 2,
          }}>
          화이트
        </Text>

        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 16,
            color: '#898989',
            marginTop: 11,
          }}>
          12호 1234
        </Text>
      </View>
    </View>
  )
}

export default ListItem
