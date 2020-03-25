/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator<RootStackParams>();
export type RootStackParams = {
  FuelCalculator: undefined;
  CalculatorResult: IFuelForm | undefined
}
import FuelForm, { IFuelForm } from './FuelForm';
import CalculatorResult from './CalculatorResult';
const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="FuelCalculator">
          <Stack.Screen name="FuelCalculator">
            {props => <FuelForm />}
          </Stack.Screen> 
          <Stack.Screen name="CalculatorResult">
            {props => <CalculatorResult />}
          </Stack.Screen> 
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
