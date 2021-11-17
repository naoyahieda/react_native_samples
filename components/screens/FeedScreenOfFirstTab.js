import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const FeedScreen = ({navigation}) => {
  return (
    <View style={{padding:30}}>
      <Text style={{padding:10,fontWeight:"bold",color:"#611F69"}}>
        Tab 1の「Feed」です。
      </Text>
      <TouchableOpacity onPress={()=>{navigation.navigate('Notification')}}  style={{padding:10}}>
        <Text>
          Tab 1の「Notification」に遷移する
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('タブ2', {screen:"Feed"})}}  style={{padding:10}}>
        <Text>
          Tab 2の「Feed」に遷移する
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{navigation.navigate('タブ2', {screen:"Notification"})}}  style={{padding:10}}>
        <Text>
          Tab 2の「Notification」に遷移する
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default FeedScreen
