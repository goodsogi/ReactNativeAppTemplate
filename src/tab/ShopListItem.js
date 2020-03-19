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
        height: 156,     
      }}>
      <View
        style={{
          flexDirection: 'row',
          height: 155,      
        }}>
        <View
          style={{
            marginStart: 21,
            marginEnd: 21,
            marginTop: 27,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
            }}>
            오토카지 강남 1호점 
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: '#a9a9a9',
              marginTop: 7,
            }}>
            서울특별시 강남구 도곡로 148 1층 
          </Text>

          <View style={{flexDirection: 'row', marginTop: 7}}>
            <Text
              style={{                
                fontSize: 15,
              }}>
              6.2km
            </Text>
             <Text
              style={{  
                marginStart: 10,             
                fontSize: 15,
                 color: '#a9a9a9',
              }}>
              풀디테일링
            </Text>
          </View>

<View style={{flexDirection: 'row', marginTop: 15}}>
            <Text
              style={{ 
                  width: 51,
                    height: 20, 
                    textAlign: 'center',             
                fontSize: 11,
                color: 'white',
                backgroundColor: 'black'
              }}>
              event
            </Text>
             <Text
              style={{  
                marginStart: 10,             
                fontSize: 17,              
              }}>
              가죽보호제 (3만원) 무상시공  
            </Text>
          </View>

        </View>
        <Image
          style={{
            width: 78,
            height: 78,
            marginStart: 20,
            marginEnd: 24,
            marginTop: 25,
            backgroundColor: '#d8d8d8',
          }}
        />
      </View >
       <View  style={{          
            height: 1,         
            backgroundColor: '#d8d8d8',
          }}/>
    </View>
  )
}

export default ListItem
