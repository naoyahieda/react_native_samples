import React from 'react'
import { View, Text } from 'react-native'

const NotificationScreenOfSecondTab = ({route}) => {
  return (
    <View style={{padding:30}}>
      <Text>Tab 2の「Notification」です。</Text>
      <Text>パラメータは「{route.params.title}」</Text>
    </View>
  )
}

export default NotificationScreenOfSecondTab
