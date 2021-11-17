import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'

const NotificationScreenOfSecondTab = ({ route, navigation }) => {

  return (
    <View style={{ padding: 30 }}>
      <View style={styles.activeTextView}>
        <Text style={styles.activeText}>
          <Text>Tab 2の「Notification」です。</Text>
          <Text>パラメータは「{route.params.title}」</Text>
        </Text>
      </View>
      <TouchableOpacity onPress={() => { navigation.navigate('タブ1', { screen: "FeedScreenOfFirst" }) }} style={{ padding: 10 }}>
        <View style={styles.button}>
          <Text>
            Tab 1の「Feed」に遷移する
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default NotificationScreenOfSecondTab
