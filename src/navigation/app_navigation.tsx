import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Button, TouchableOpacity, Image } from 'react-native';

import HomeScreen from '../screens/home';

import {home_style} from '../styles/home_style';
import buttonStyle from '../styles/button_style';
import iconStyle from '../styles/icon_style';
import UnitPicker from '../screens/unitPicker';

const Stack = createStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Convertle',
            headerTitleAlign: 'center',
            headerStyle: home_style.home_header,
            headerTitleStyle: home_style.home_header_title,
            headerShadowVisible: false,
        }}
        />
        <Stack.Screen
          name="UnitPicker"
          component={UnitPicker}
          options={({navigation}: any) => ({
            title: 'Select Unit',
            headerTitleAlign: 'center',
            headerStyle: home_style.home_header,
            headerTitleStyle: home_style.home_header_title,
            headerShadowVisible: false,
            headerLeft: () => (
              <TouchableOpacity style={buttonStyle.headerButton} onPress={() => navigation.goBack()}>
                <Image
                  source={require('../assets/icons/arrow_back_ios.png')}
                  style={{width: 20, height: 20, tintColor: "#fff", marginRight: 20}}
                />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;