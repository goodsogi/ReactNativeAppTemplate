import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import {IMAGE} from './constants/Images'


export class CustomDrawerContent extends Component {
    
    componentDidMount() {
    }

          
    handleMenuClick = () => {
        this.props.appProps.navigation.closeDrawer()
        this.props.onMenuSelected('banana')
        //this.props.onMenuSelected(this.props.appProps.navigation)
      }
    
    render() {
     
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ height: 150, alignItems: 'center', justifyContent: 'center' }} >
                    <Image source={IMAGE.ICON_PROFILE} style={{ height: 120, width: 120, borderRadius: 60 }}
                    />
                </View>
                <ScrollView style={{ marginStart: 10 }}>
                    <TouchableOpacity style={{ marginTop: 20 }} onPress={this.handleMenuClick}>
                        
                        <Text>구글</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 20 }} onPress={() => this.props.onMenuSelected()}>
                        <Text>네이버</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop: 20 }} onPress={() => this.props.onMenuSelected()}>
                        <Text>카카오</Text>
                    </TouchableOpacity>
                </ScrollView>                
            </SafeAreaView>

        )
    }
}