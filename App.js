import React from 'react'

import FirstTab from "./components/tabs/FirstTab"
import SecondTab from "./components/tabs/SecondTab"

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Tab.Navigator tabBarOptions={{ activeTintColor: "#611F69" }}>
          <Tab.Screen 
            name='タブ1' 
            component={FirstTab} 
            options={{headerShown:false, tabBarIcon: ({ size,color }) => (<MaterialCommunityIcons name="apple" color={color} size={size} />)}} 
          />
          <Tab.Screen 
            name='タブ2' 
            component={SecondTab} 
            options={{headerShown:false, tabBarIcon: ({ size,color }) => (<MaterialCommunityIcons name="android" color={color} size={size} />)}} 
          />
        </Tab.Navigator>
      </NavigationContainer>
    )
}

export default App;