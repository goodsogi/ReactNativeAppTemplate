import React, {Component} from 'react'
import {Text, View, Image, StyleSheet, TouchableOpacity, Dimensions} from 'react-native'
import {IMAGE} from '../constants/Images'

// Component가 아니라서 props는 사용못하나??
// ()안에 매개변수로 들어오는 듯
// {item}같이 {}를 쳐야 값이 들어옴 
const ListItem = ({key}) => {
  //const {key} = item  
const dimensions = Dimensions.get('window');
const imageWidth = dimensions.width;




  return (
   
    <View
      style={{ 
            height: 129
      }}>     
      <Image style={{width: imageWidth,  height: 129 }} source={IMAGE.PIC_BIG_CAR} />
     {/* position: 'absolute'를 하면 레이아웃을 겹칠 수 있음 */}


    
    </View>
     
  )
}

export default ListItem;

// 부모 View의 맨하단에 정렬
const styles = StyleSheet.create({
  bottom: {
  flex: 1,
  justifyContent: 'flex-end',
  marginBottom: 18,
  marginStart: 47 
},});