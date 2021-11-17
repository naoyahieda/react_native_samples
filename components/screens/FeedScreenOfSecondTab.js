import React from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './styles'

const FeedScreen = ({ navigation }) => {

  return (
    <View style={{ padding: 30 }}>
      <View style={styles.activeTextView}>
        <Text style={styles.activeText}>
          <Text>Tab 2の「Feed」です。{"\n"}</Text>
          <Text>{"\n"}</Text>
          <Text>Navigation stackをリセットしたので、Tab 1に戻ると「Feed」が出ると思います。</Text>
        </Text>
      </View>
      <TouchableOpacity onPress={() => { navigation.navigate("Notification") }} style={{ padding: 10 }}>
        <View style={styles.button}>
          <Text>
            Tab 2の「Notification」に遷移する
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default FeedScreen
