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
     >

    <View
      style={{
        flexDirection: 'row',
        height: 136,
        backgroundColor: 'white',
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
          외부 세차
        </Text>

        <Text
          style={{
            fontSize: 15,
            color: '#adadad',
            marginTop: 7,
          }}>
          프리미엄실내/실외세차+특정부위{'\n'}스팀 세척
        </Text>

        <View style={{flexDirection: 'row', marginTop: 11}}>
          <Text
            style={{
                flex: 1, 
              fontWeight: 'bold',
              fontSize: 15,
            }}>
            30분 소요
          </Text>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            100,000원~
          </Text>
        </View>
      </View>
      <Image
        style={{
          width: 20,
          height: 20,
          marginStart: 15,
          marginEnd: 16,
        }}

         source={IMAGE.ICON_ARROW}

      />
    </View>
 <View  style={{        
          height: 2,
          backgroundColor: '#e9e9e9'
        }} />
     </View>
  )
}

export default ListItem
