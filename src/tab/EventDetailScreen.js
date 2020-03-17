import React, { Component } from 'react'
import { Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { CustomHeader } from '../index'

export class EventDetailScreen extends Component {
    
    
    
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }} >
                <CustomHeader title="Event Detail" navigation={this.props.navigation} />
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text>이벤트{'\n'}상세페이지</Text>
                    <TouchableOpacity
              style={{              
                marginTop: 23,
                marginStart: 2,
                marginEnd: 40,
                height: 51,
                borderRadius: 2, 
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#ebebeb'
              }}
              onPress={() => this.props.navigation.navigate('HomeDetail')}>
            
              <Text style={{fontSize: 15, color: '#878787'}}>
               {this.props.route.params.key}
              </Text>
            </TouchableOpacity>
                </View>
            </SafeAreaView>

        )
    }
}