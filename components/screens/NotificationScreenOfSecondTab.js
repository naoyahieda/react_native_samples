import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const NotificationScreen = () => {

  return (
    <View style={{ padding: 30 }}>
      <View style={styles.activeTextView}>
        <Text style={styles.activeText}>
          <Text>Tab 2の「Notification」です。</Text>
        </Text>
      </View>
    </View>
  )
}

export default NotificationScreen
