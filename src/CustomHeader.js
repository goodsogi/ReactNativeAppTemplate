import React, { Component } from 'react'
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import {IMAGE} from './constants/Images'

export class CustomHeader extends Component {
    render() {
        let { navigation, isHome, title} = this.props
        return (
            <View style={{ flexDirection: 'row', height: 70}} >
                {
                    isHome ?

                        <TouchableOpacity onPress={() => navigation.openDrawer()}>
                            <Image style={{ width: 18, height: 20, marginStart: 20, resizeMode: 'contain'}} source={IMAGE.ICON_MENU}  />
                        </TouchableOpacity>
                        : <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                            onPress={() => navigation.goBack()}>
                      
                            <Image style={{ width: 20, height: 20, marginStart: 16, resizeMode: 'contain' }} source={IMAGE.ICON_BACK}  />
                        </TouchableOpacity>
                }

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginEnd: 38 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
                </View>
            </View>
        )
    }
}