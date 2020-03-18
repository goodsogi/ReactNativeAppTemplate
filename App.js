import * as React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator} from '@react-navigation/stack'
import {CustomDrawerContent} from './src'
import {
  HomeScreen,
  HomeDetailScreen,
  EventDetailScreen,
  RealReviewScreen,
  RealReviewDetailScreen,
  GoodTipDetailScreen,
  ChooseCarScreen,
  ChooseProductScreen,
  ChooseOptionScreen,
   ChooseDateScreen,
   PayScreen,
} from './src/tab'
import {NotificationsScreen} from './src/drawer'

const navOptionHandler = () => ({
  headerShown: false,
})

const Drawer = createDrawerNavigator()

// 함수 인자 navigation에 괄호를 치면 undefined 오류 발생
function onMenuSelected (fruitName) {
  alert(fruitName)
  //navigation.closeDrawer()
}

const StackHome = createStackNavigator()

function HomeStack () {
  return (
    <StackHome.Navigator initialRouteName='Home'>
      <StackHome.Screen
        name='Home'
        component={HomeScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name='HomeDetail'
        component={HomeDetailScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name='EventDetail'
        component={EventDetailScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name='RealReview'
        component={RealReviewScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name='RealReviewDetail'
        component={RealReviewDetailScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name='GoodTipDetail'
        component={GoodTipDetailScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name='ChooseCar'
        component={ChooseCarScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name='ChooseProduct'
        component={ChooseProductScreen}
        options={navOptionHandler}
      />
       <StackHome.Screen
        name='ChooseOption'
        component={ChooseOptionScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name='ChooseDate'
        component={ChooseDateScreen}
        options={navOptionHandler}
      />
       <StackHome.Screen
        name='Pay'
        component={PayScreen}
        options={navOptionHandler}
      />
    </StackHome.Navigator>
  )
}

export default function App () {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        drawerContent={props => (
          <CustomDrawerContent
            onMenuSelected={onMenuSelected}
            appProps={props}
          />
        )}>
        <Drawer.Screen
          name='Home'
          component={HomeStack}
          options={navOptionHandler}
        />
        <Drawer.Screen
          name='Notifications'
          component={NotificationsScreen}
          options={navOptionHandler}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
