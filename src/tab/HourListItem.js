import React, {Component} from 'react'
import {Text, View, Image, StyleSheet} from 'react-native'
import {IMAGE} from '../constants/Images'
// Component가 아니라서 props는 사용못하나??
// ()안에 매개변수로 들어오는 듯
// {item}같이 {}를 쳐야 값이 들어옴

const ListItem = ({item, isSelected}) => {
  const {hour} = item
  return (
    <View
      style={{     
        width: 81,
        height: 40,
        borderRadius: 3, 
        borderWidth: 2,
        borderColor: '#e8e8e8',
        backgroundColor: isSelected? 'black':'#f1f1f1',     
        marginEnd: 7,      
        alignItems: 'center',
        justifyContent: 'center'
      }}>
       <Text
          style={{
            fontWeight: 'bold',
            fontSize: 15,
            color: isSelected? 'white': 'black'
          }}>
          {hour}
        </Text>
    </View>
  )
}

export default ListItem
