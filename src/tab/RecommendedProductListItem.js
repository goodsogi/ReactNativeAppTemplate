import React, {Component} from 'react'
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native'
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
        backgroundColor: '#323232',
        borderRadius: 5,
        marginStart: 20,   
        marginEnd: 9    
      }}>
      <Text style={{marginTop: 25, marginStart: 21, color: 'white', fontSize: 24}}>{title}</Text>
   <View style={styles.bottom}>
      <Image style={{width: 198, height: 99,justifyContent: 'flex-end'}} source={IMAGE.PIC_BIG_CAR} />
   </View>
   
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