import React, {Component} from 'react'
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native'
import {IMAGE} from '../constants/Images'
import HourListItem from './HourListItem'
// Component가 아니라서 props는 사용못하나??
// ()안에 매개변수로 들어오는 듯
// {item}같이 {}를 쳐야 값이 들어옴


export class ManagerListItem extends Component {
  constructor (props) {
    super(props)

    const data = [
      {id: '1', hour: '15:00'},
      {id: '2', hour: '15:30'},
      {id: '3', hour: '16:00'},
      {id: '4', hour: '16:30'},
      {id: '5', hour: '17:00'},
      {id: '6', hour: '17:30'},
    ]

    const hourMap = new Map()

    for (var i = 0; i < data.length; i++) {
      hourMap.set(data[i].id, false)
    }

    this.state = {
      dataSource: data,
      hourMap: hourMap,
    }
  }

// 여기서 화살표함수 사용하면 제대로 작동안하나?
  handleHourChosen({item}) {
      
      this.setState(state => {
      //create new Map object, maintaining state immutability

      const hourMap = new Map(state.hourMap)
      hourMap.set(item.id, !hourMap.get(item.id))

      
// 변수명을 기존에 선언한 변수명과 같게 해야 하는 듯
      return {hourMap}
    })
  }

  render () {
    return (
      <View
        style={{
          height: 170,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginStart: 24,
            marginEnd: 14,
            marginTop: 21,
            alignItems: 'center',
          }}>
          <Image
            style={{
              width: 67,
              height: 67,
              borderRadius: 34,
              backgroundColor: '#eeeeee',
            }}
          />
          <View
            style={{
              marginStart: 19,
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              오토카지 매니저 1
            </Text>

            <Text
              style={{
                fontSize: 16,
                color: '#555555',
                marginTop: 5,
              }}>
              워터리스
            </Text>
          </View>
        </View>
        <FlatList
          style={{
            paddingStart: 21,
            marginTop: 14,
          }}
          data={this.state.dataSource}
          renderItem={({item}) => (
            //{를 치면 안되고 바로 태그를 리턴해야 하는 듯
            //속성으로 지정하고 ListItem 스크립트에서 매개변수()로 받을 수 있는 듯

            <TouchableOpacity
              onPress={() => {
                this.handleHourChosen({item})
              }}>
              <HourListItem item={item}  isSelected={!!this.state.hourMap.get(item.id)}/>
            </TouchableOpacity>
          )}
          horizontal={true}
        />
      </View>
    )
  }
}


