import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

const FeedScreenOfSecondTab = () => {

  return (
    <View style={{ padding: 30 }}>
      <View style={styles.activeTextView}>
        <Text style={styles.activeText}>
          <Text>Tab 2の「Feed」です。{"\n"}</Text>
          <Text>{"\n"}</Text>
          <Text>Navigation stackをリセットしたので、Tab 1に戻ると「Feed」が出ると思います。</Text>
        </Text>
      </View>
    </View>
  )
}

export default FeedScreenOfSecondTab
