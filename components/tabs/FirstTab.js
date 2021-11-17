import React from  "react"
import { createStackNavigator } from '@react-navigation/stack';
import FeedScreenOfFirstTab from '../screens/FeedScreenOfFirstTab'
import NotificationScreenOfFirstTab from '../screens/NotificationScreenOfFirstTab'

const Stack = createStackNavigator();

const FirstTab = ()=> {
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={FeedScreenOfFirstTab} />
      <Stack.Screen name="Notification" component={NotificationScreenOfFirstTab} />
    </Stack.Navigator>
  );
}

export default FirstTab