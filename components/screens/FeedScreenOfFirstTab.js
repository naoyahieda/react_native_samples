import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'

const FeedScreenOfFirstTab = ({ navigation }) => {
  
  return (
    <View style={{ padding: 30 }}>
      <View style={styles.activeTextView}>
        <Text style={styles.activeText}>
          Tab 1の「Feed」です。
        </Text>
      </View>
      <TouchableOpacity onPress={() => { navigation.navigate('NotificationScreenOfFirst') }} style={{ padding: 10 }}>
        <View style={styles.button}>
          <Text>
            Tab 1の「Notification」に遷移する
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )

}

export default FeedScreenOfFirstTab
