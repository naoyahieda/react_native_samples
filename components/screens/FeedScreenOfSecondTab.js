import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'

const FeedScreenOfSecondTab = ({ navigation }) => {

  return (
    <View style={{ padding: 30 }}>
      <View style={styles.activeTextView}>
        <Text style={styles.activeText}>Tab 2の「Feed」です。</Text>
      </View>
      <TouchableOpacity onPress={() => { navigation.navigate("NotificationScreenOfSecond", { title: 'パラメータY' }) }} style={{ padding: 10 }}>
        <View style={styles.button}>
          <Text>
            Tab 2の「Notification」に遷移する
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default FeedScreenOfSecondTab
