import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'

const NotificationScreen = ({ navigation }) => {

  return (
    <View style={{ padding: 30 }}>
      <View style={styles.activeTextView}>
        <Text style={styles.activeText}>
          <Text>Tab 1の「Notification」です。</Text>
        </Text>
      </View>
      <TouchableOpacity onPress={() => { navigation.navigate('タブ2', { screen: "Feed" }) }} style={{ padding: 10 }}>
        <View style={styles.button}>
          <Text>
            Tab 2の「Feed」に遷移する
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default NotificationScreen
