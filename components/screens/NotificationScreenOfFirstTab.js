import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { CommonActions } from '@react-navigation/native'
import styles from './styles'

const NotificationScreenOfFirstTab = ({ navigation }) => {

  // タブ2のFeedに遷移する際、タブ1のNavigation stackをリセット
  const resetActionOfFeed = CommonActions.reset({
    index: 1,
    routes: [
      { name: 'FeedScreenOfFirst' }
    ]
  })

  return (
    <View style={{ padding: 30 }}>
      <View style={styles.activeTextView}>
        <Text style={styles.activeText}>
          <Text>Tab 1の「Notification」です。</Text>
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.dispatch(resetActionOfFeed)
          navigation.navigate('タブ2', { screen: "FeedScreenOfSecond" })
        }}
        style={{ padding: 10 }}>
        <View style={styles.button}>
          <Text>
            Navigation stackをリセットし、Tab 2の「Feed」に遷移する
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('タブ2', { screen: "NotificationScreenOfSecond" })
        }}
        style={{ padding: 10 }}>
        <View style={styles.button}>
          <Text>
            Navigation stackをリセットせず、Tab 2の「Notification」に遷移する
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default NotificationScreenOfFirstTab
