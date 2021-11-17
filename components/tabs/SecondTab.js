import React from  "react"
import { createStackNavigator } from '@react-navigation/stack';
import FeedScreenOfSecondTab from '../screens/FeedScreenOfSecondTab'
import NotificationScreenOfFirstTab from '../screens/NotificationScreenOfFirstTab'

const Stack = createStackNavigator();

const SecondTab = ()=> {
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={FeedScreenOfSecondTab} />
      <Stack.Screen name="Notification" component={NotificationScreenOfFirstTab}/>
    </Stack.Navigator>
  );
}

export default SecondTab