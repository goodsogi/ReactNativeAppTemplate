import React, {Component} from 'react'
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native'
import {IMAGE} from '../constants/Images'
import {Rating} from 'react-native-ratings'
// Component가 아니라서 props는 사용못하나??
// ()안에 매개변수로 들어오는 듯
// {item}같이 {}를 쳐야 값이 들어옴

let {height, width} = Dimensions.get('window');
   this.itemWidth = (width - 59) /2


const ListItem = ({item}) => {
  const {key} = item
  
  

  return (
    <View
      style={{
        width: itemWidth,
        height: 313,
        backgroundColor: 'white',       
        marginEnd: 15,
        marginTop: 16
      }}>
      <Image
        style={{
           width: itemWidth,
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
          fontSize: 16,
        }}>
        미니쿠퍼 3세대
      </Text>

      <View style={{width: 87, marginStart: 5, marginTop: 2}}>
        <Rating ratingCount={5} imageSize={13} />
      </View>
      <Text
        style={{
          marginTop: 16,
          marginStart: 18,
          marginEnd: 18,
          color: '#b0b0b0',
          fontSize: 13,
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
