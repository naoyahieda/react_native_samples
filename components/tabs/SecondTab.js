
   
import React from  "react"
import { createStackNavigator } from '@react-navigation/stack';
import FeedScreenOfSecondTab from '../screens/FeedScreenOfSecondTab'
import NotificationScreenOfSecondTab from '../screens/NotificationScreenOfSecondTab'

const Stack = createStackNavigator();

const SecondTab = ()=> {
  
  return (
    <Stack.Navigator>
      <Stack.Screen name="FeedScreenOfSecond" component={FeedScreenOfSecondTab} />
      <Stack.Screen name="NotificationScreenOfSecond" component={NotificationScreenOfSecondTab}/>
    </Stack.Navigator>
  );
}

export default SecondTab