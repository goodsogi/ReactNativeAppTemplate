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
//{}를 치지 않으면 오류 발생
import {ManagerListItem} from './ManagerListItem'


export class ChooseDateScreen extends Component {
  constructor (props) {
    super(props)

    //현재 week 날짜 가져오는 방법
    var currentDate = new Date() // get current date
    var firstDayOfWeek = currentDate.getDate() - currentDate.getDay() + 1 // First day is the day of the month - the day of the week
    //배열은 []라고 선언하고 push로 값을 넣는 듯
    const currentWeekData = []

    for (var i = 0; i < 7; i++) {
      currentWeekData.push(firstDayOfWeek + i)
    }

    const today = currentDate.getDay() - 1

    this.state = {
      isLoading: true,
      isOneTimeCarWashSelected: true,
      isPeriodicCarWashSelected: false,
      selectedDay: today,
      today: today,
      currentWeekData: currentWeekData,
    }
  }

  componentDidMount () {
    return fetch('https://reactnative.dev/movies.json')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            dataSource: responseJson.movies,
          },
          function () {},
        )
      })
      .catch(error => {
        console.error(error)
      })
  }

  handleOneTimeCarWashSelected () {
    this.setState({
      isOneTimeCarWashSelected: true,
      isPeriodicCarWashSelected: false,
    })
  }

  handlePeriodicCarWashSelected () {
    this.setState({
      isOneTimeCarWashSelected: false,
      isPeriodicCarWashSelected: true,
    })
  }

  //{}를 치면 parameter로 값이 안넘어옴. undefined
  //{}는 속성값을 가져오는 건가?
  handleDaySelected (selectedDay) {
    this.setState({
      selectedDay: selectedDay,
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
          title='날짜/시간 선택'
          isNeedAddButton={false}
          fruit='apple'
          navigation={this.props.navigation}
        />

        <View>
          <View
            style={{
              height: 1,
              backgroundColor: '#fbfbfb',
            }}
          />
          <View
            style={{
              height: 2,
              backgroundColor: '#eeeeee',
            }}
          />
        </View>
        <View
          style={{
            height: 135,
            flexDirection: 'row',
            backgroundColor: 'white',
          }}>
          <View style={{flex: 1, marginTop: 25, marginStart: 21}}>
            <Text style={{fontSize: 21, color: '#848484'}}>상품</Text>
            <Text style={{marginTop: 4, fontSize: 21, color: '#848484'}}>
              옵션{' '}
            </Text>
            <Text style={{marginTop: 14, fontSize: 21, color: '#848484'}}>
              가격{' '}
            </Text>
          </View>

          <View style={{flex: 1, marginTop: 25, marginStart: 18}}>
            <Text style={{fontSize: 21, fontWeight: 'bold'}}>외부세차</Text>
            <Text style={{marginTop: 4, fontSize: 21, fontWeight: 'bold'}}>
              왁스코팅
            </Text>
            <Text
              style={{marginTop: 14, fontSize: 21, fontWeight: 'bold'}}></Text>
          </View>
          <Text
            style={{
              marginTop: 76,
              marginEnd: 25,
              fontSize: 25,
              fontWeight: 'bold',
            }}>
            160,000원
          </Text>
        </View>
        <View>
          <View
            style={{
              height: 1,
              backgroundColor: '#fbfbfb',
            }}
          />
          <View
            style={{
              height: 7,
              backgroundColor: '#f6f6f6',
            }}
          />
          <View
            style={{
              height: 1,
              backgroundColor: '#fbfbfb',
            }}
          />
        </View>

        <Text
          style={{
            marginStart: 20,
            marginTop: 20,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          날짜선택
        </Text>

        <View
          style={{
            flexDirection: 'row',
            marginStart: 14,
            marginEnd: 14,
            marginTop: 23,
          }}>
          <Text
            style={{
              flex: 1,
              fontSize: 20,
              color: '#dddddd',
              textAlign: 'center',
            }}>
            월
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 20,
              color: '#dddddd',
              textAlign: 'center',
            }}>
            화
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 20,
              color: '#dddddd',
              textAlign: 'center',
            }}>
            수
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 20,
              color: '#dddddd',
              textAlign: 'center',
            }}>
            목
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 20,
              color: '#dddddd',
              textAlign: 'center',
            }}>
            금
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 20,
              color: '#dddddd',
              textAlign: 'center',
            }}>
            토
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 20,
              color: '#dddddd',
              textAlign: 'center',
            }}>
            일
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginStart: 14,
            marginEnd: 14,
            marginTop: 6,
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={{
              width: 42,
              height: 42,
              borderRadius: 21,
              backgroundColor: this.state.selectedDay == 0 ? 'black' : 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => this.handleDaySelected(0)}>
            <Text
              style={{
                fontSize: 17,
                color: this.state.selectedDay == 0 ? 'white' : 'black',
              }}>
              {this.state.currentWeekData[0]}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 42,
              height: 42,
              borderRadius: 21,
              backgroundColor: this.state.selectedDay == 1 ? 'black' : 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => this.handleDaySelected(1)}>
            <Text
              style={{
                fontSize: 17,
                color: this.state.selectedDay == 1 ? 'white' : 'black',
              }}>
              {this.state.currentWeekData[1]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 42,
              height: 42,
              borderRadius: 21,
              backgroundColor: this.state.selectedDay == 2 ? 'black' : 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => this.handleDaySelected(2)}>
            <Text
              style={{
                fontSize: 17,
                color: this.state.selectedDay == 2 ? 'white' : 'black',
              }}>
              {this.state.currentWeekData[2]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 42,
              height: 42,
              borderRadius: 21,
              backgroundColor: this.state.selectedDay == 3 ? 'black' : 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => this.handleDaySelected(3)}>
            <Text
              style={{
                fontSize: 17,
                color: this.state.selectedDay == 3 ? 'white' : 'black',
              }}>
              {this.state.currentWeekData[3]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 42,
              height: 42,
              borderRadius: 21,
              backgroundColor: this.state.selectedDay == 4 ? 'black' : 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => this.handleDaySelected(4)}>
            <Text
              style={{
                fontSize: 17,
                color: this.state.selectedDay == 4 ? 'white' : 'black',
              }}>
              {this.state.currentWeekData[4]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 42,
              height: 42,
              borderRadius: 21,
              backgroundColor: this.state.selectedDay == 5 ? 'black' : 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => this.handleDaySelected(5)}>
            <Text
              style={{
                fontSize: 17,
                color: this.state.selectedDay == 5 ? 'white' : 'black',
              }}>
              {this.state.currentWeekData[5]}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 42,
              height: 42,
              borderRadius: 21,
              backgroundColor: this.state.selectedDay == 6 ? 'black' : 'white',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => this.handleDaySelected(6)}>
            <Text
              style={{
                fontSize: 17,
                color: this.state.selectedDay == 6 ? 'white' : 'black',
              }}>
              {this.state.currentWeekData[6]}
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginStart: 14,
            marginEnd: 14,
            marginTop: 8,
          }}>
          <Text
            style={{
              flex: 1,
              fontSize: 14,
              textAlign: 'center',
              color: this.state.today == 0 ? 'black' : 'white',
            }}>
            오늘
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 14,
              textAlign: 'center',
              color: this.state.today == 1 ? 'black' : 'white',
            }}>
            오늘
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 14,
              textAlign: 'center',
              color: this.state.today == 2 ? 'black' : 'white',
            }}>
            오늘
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 14,
              textAlign: 'center',
              color: this.state.today == 3 ? 'black' : 'white',
            }}>
            오늘
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 14,
              textAlign: 'center',
              color: this.state.today == 4 ? 'black' : 'white',
            }}>
            오늘
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 14,
              textAlign: 'center',
              color: this.state.today == 5 ? 'black' : 'white',
            }}>
            오늘
          </Text>
          <Text
            style={{
              flex: 1,
              fontSize: 14,
              textAlign: 'center',
              color: this.state.today == 6 ? 'black' : 'white',
            }}>
            오늘
          </Text>
        </View>

        <View style={{marginTop: 5, alignItems: 'center'}}>
          <TouchableOpacity
            style={{
              height: 30,
              width: 111,
              borderRadius: 15,
              backgroundColor: '#f1f1f1',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => this.handlePeriodicCarWashSelected()}>
            <Text style={{fontSize: 16}}>더보기</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            marginTop: 19,
          }}>
          <View
            style={{
              height: 2,
              backgroundColor: '#f0f0f0',
            }}
          />
          <View
            style={{
              height: 9,
              backgroundColor: '#f6f6f6',
            }}
          />
        </View>

        <Text
          style={{
            marginStart: 20,
            marginTop: 20,
            fontSize: 20,
            fontWeight: 'bold',
          }}>
          매니저/시간 선택
        </Text>

        <View
          style={{
            height: 1,
            marginStart: 20,
            marginEnd: 20,
            marginTop: 16,
            backgroundColor: '#f3f3f3',
          }}
        />

        <FlatList
          data={this.state.dataSource}
          renderItem={({item}) => (
            //{를 치면 안되고 바로 태그를 리턴해야 하는 듯
            //속성으로 지정하고 ListItem 스크립트에서 매개변수()로 받을 수 있는 듯

            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('RealReviewDetail', item)
              }>
              <ManagerListItem item={item} />
            </TouchableOpacity>
          )}
        />

        <TouchableOpacity
          style={{
            height: 67,
            backgroundColor: 'black',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => this.props.navigation.navigate('Pay')}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>
            예약하기
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    )
  }
}
