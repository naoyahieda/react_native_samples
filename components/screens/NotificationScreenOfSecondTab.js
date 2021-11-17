import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const NotificationScreenOfSecondTab = () => {

  return (
    <View style={{ padding: 30 }}>
      <View style={styles.activeTextView}>
        <Text style={styles.activeText}>
          <Text>Tab 2の「Notification」です。{"\n"}</Text>
          <Text>{"\n"}</Text>
          <Text>Navigation stackをリセットしていないので、Tab 1に戻ると「Notification」が出ると思います。</Text>
        </Text>
      </View>
    </View>
  )
}

export default NotificationScreenOfSecondTab
