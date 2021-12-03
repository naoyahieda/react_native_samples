// 参考： https://docs.expo.dev/versions/latest/sdk/haptics/

import * as React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import * as Haptics from 'expo-haptics';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>選択ボタンを押す時(Haptics.selectionAsync)</Text>
      <View style={styles.buttonContainer}>
        <Button title='選択ボタン' onPress={() => Haptics.selectionAsync() } type="outline"/>
      </View>
      <Text style={styles.text}>結果に応じた使い分け(Haptics.notificationAsync)</Text>
      <View style={styles.buttonContainer}>
        <Button color = "green" title='成功' onPress={() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success) } />
        <Button color = "red" title='エラー' onPress={() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error) } />
        <Button color = "orange" title='注意' onPress={() => Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning) } />
      </View>
      <Text style={styles.text}>強さを調節する(Haptics.impactAsync)</Text>
      <View style={styles.buttonContainer}>
        <Button title='軽め' onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light) } />
        <Button title='中くらい' onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium) } />
        <Button title='重め' onPress={() => Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy) } />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    marginTop: 10,
    marginBottom: 30,
    justifyContent: 'space-between'
  },
  
});
