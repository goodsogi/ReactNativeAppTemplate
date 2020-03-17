import React, {Component} from 'react'
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native'
import {CustomHeader2} from '../index'
import CarListItem from './CarListItem'
export class ChooseCarScreen extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      carMap: new Map(),
      previousChosenCarId: -1,
      chosenCarData: null
    }
  }

  componentDidMount () {
    return fetch('https://reactnative.dev/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        const initialCarMap = new Map()

        for (let i = 0; i < responseJson.movies.length; i++) {
          //[i]로 해당 index의 객체를 가져옴
          initialCarMap.set(responseJson.movies[i].id, false)
        }

        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.movies,
            carMap: initialCarMap,
          },
          function () {},
        )
      })
      .catch(error => {
        console.error(error)
      })
  }

  handlePress = () => {
    alert('add 버튼 클릭!')
  }

  handleCarChosen = ({item}) => {
    //alert('선택된 자동차: ' + item.title)

    this.setState(state => {
      //create new Map object, maintaining state immutability

      const carMap = new Map(state.carMap)
      carMap.set(item.id, true)

      state.chosenCarData = item;

      if (
        state.previousChosenCarId != -1 &&
        state.previousChosenCarId != item.id
      ) {
        carMap.set(state.previousChosenCarId, false)
      }
 
    state.previousChosenCarId = item.id
// 변수명을 기존에 선언한 변수명과 같게 해야 하는 듯
      return {carMap}
    })

    
  }

  render () {
    if (this.state.isLoading) {
      return (
        <View
          style={{
            flex: 1,
            padding: 20,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <ActivityIndicator />
        </View>
      )
    }

    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <CustomHeader2
          title='차량선택'
          isNeedAddButton={true}
          onPress={this.handlePress}
          navigation={this.props.navigation}
        />
        <FlatList
          style={{backgroundColor: '#f6f6f6'}}
          data={this.state.dataSource}
          renderItem={({item}) => (
            //{를 치면 안되고 바로 태그를 리턴해야 하는 듯
            //속성으로 지정하고 ListItem 스크립트에서 매개변수()로 받을 수 있는 듯

            // () => 를 사용하지 않으면 함수가 다 실행됨
            //item에 {}를 치지 않으면 undefined 오류 발생
            <TouchableOpacity onPress={() => this.handleCarChosen({item})}>
              <CarListItem
                item={item}
                isSelected={!!this.state.carMap.get(item.id)}
              />
            </TouchableOpacity>
          )}
        />

        <TouchableOpacity
          style={{
            height: 71,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black',
          }}
          onPress={() => this.props.navigation.navigate('ChooseProduct', this.state.chosenCarData)}>
          <Text style={{fontSize: 21, fontWeight: 'bold', color: 'white'}}>
            다음
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}
