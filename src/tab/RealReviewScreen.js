import React, {Component} from 'react'
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  FlatList,
  Dimensions
} from 'react-native'
import {CustomHeader} from '../index'
import AdListItem from './AdListItem' //RecommendedProductListItem 같이 이름은 아무거나 괜찮은 듯
import ViewPager from '@react-native-community/viewpager'
import SmallRealReviewListItem from './SmallRealReviewListItem'

export class RealReviewScreen extends Component {
  constructor (props) {
    super(props)
    //constructor에서 state값을 지정하지 않으면 state가 null이라서 오류 발생 
    this.state = {selectedPageNo: 0}
    let {height, width} = Dimensions.get('window');
    this.itemWidth = width - 59
  }

  handleViewPagerPageSelected ({event}) {
   
    //setState를 호출해야 렌더링을 다시 함 
    this.setState({selectedPageNo: event.nativeEvent.position})
  }

  render () {
    return (
      <SafeAreaView style={{flex: 1}}>
        <CustomHeader title='리얼후기' navigation={this.props.navigation} />
       
          <ViewPager
            style={{ height: 129}}
            initialPage={0}
            onPageSelected={event => {
              this.handleViewPagerPageSelected({event})
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('EventDetail', {key: '1'})
              }}>
              <AdListItem key='1' />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('EventDetail')
              }}>
              <AdListItem key='2' />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('EventDetail')
              }}>
              <AdListItem key='3' />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('EventDetail')
              }}>
              <AdListItem key='4' />
            </TouchableOpacity>
          </ViewPager>
          
          <View style={{flexDirection: 'row', marginStart: 25, marginTop: -29}}>
            <View
              style={{
                width: 9,
                height: 9,
                borderRadius: 5,
                backgroundColor:
                  this.state.selectedPageNo == 0 ? 'white' : '#616161',
              }}
            />
            <View
              style={{
                width: 9,
                height: 9,
                marginLeft: 3,
                borderRadius: 5,
                backgroundColor:
                  this.state.selectedPageNo == 1 ? 'white' : '#616161',
              }}
            />
            <View
              style={{
                width: 9,
                height: 9,
                marginLeft: 3,
                borderRadius: 5,
                backgroundColor:
                  this.state.selectedPageNo == 2 ? 'white' : '#616161',
              }}
            />
            <View
              style={{
                width: 9,
                height: 9,
                marginLeft: 3,
                borderRadius: 5,
                backgroundColor:
                  this.state.selectedPageNo == 3 ? 'white' : '#616161',
              }}
            /> 
          </View>
          {/* numColumns로 column 개수 지정 가능 */}
          <FlatList
            style={{ marginTop: 18, marginStart: 22, marginEnd: 7}}
            numColumns={2}
            data={[
              {key: '1'},
              {key: 'Dan'},
              {key: 'Dominic'},
              {key: 'Jackson'},
              {key: 'James'},
              {key: 'Joel'},
              {key: 'John'},
              {key: 'Jillian'},
              {key: 'Jimmy'},
              {key: 'Julie'},
            ]}
            renderItem={({item}) => (
              //{를 치면 안되고 바로 태그를 리턴해야 하는 듯
              //속성으로 지정하고 ListItem 스크립트에서 매개변수()로 받을 수 있는 듯

                <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate('RealReviewDetail', item)
                }>
              <SmallRealReviewListItem item={item} />
              </TouchableOpacity>
            )}
          
          />
       
      </SafeAreaView>
    )
  }
}
