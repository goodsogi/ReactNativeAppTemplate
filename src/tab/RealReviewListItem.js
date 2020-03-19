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
        width: 217,
        height: 339,
        backgroundColor: 'white',
        borderRadius: 5,
        borderColor: '#efefef',
        borderWidth: 1,
        marginStart: 20,
        marginEnd: 9,
      }}>
      <Image
        style={{
          width: '100%',
          height: 159,
          borderTopLeftRadius: 5,
          borderTopRightRadius: 5,
        }}
        source={IMAGE.PIC_BIG_CAR_2}
      />

      <View
        style={{
          marginTop: -23,
          alignItems: 'flex-end',
          marginEnd: 12,
          borderColor: 'white',
        }}>
        <View
          style={{
            width: 45,
            height: 45,
            borderRadius: 23,
            backgroundColor: '#d8d8d8',
            borderWidth: 2,
            borderColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image style={{width: 20, height: 20}} source={IMAGE.ICON_USER} />
        </View>
      </View>
      <Text
        style={{
          marginTop: 5,
          marginStart: 18,
          fontWeight: 'bold',
          fontSize: 20,
        }}>
       {title}
      </Text>

      <View style={{width: 87, marginStart: 5, marginTop: 2}}>
       
      </View>
      <Text
        style={{
          marginTop: 16,
          marginStart: 18,
          marginEnd: 18,
          color: '#b0b0b0',
          fontSize: 16,
        }}>
        소비자 입장으로 잘 봐주셔서 감사했습니다! 광택 예약 이후에 모르는 부분에
        대해서 질문에...
      </Text>
    </View>
  )
}

export default ListItem

// 부모 View의 맨하단에 정렬
const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 18,
    marginStart: 47,
  },
})
