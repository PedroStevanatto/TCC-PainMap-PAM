import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FormPage from "./pages/FormPage"
import AlertDTM from './pages/AlertDTM';
import NaoDTM from './pages/NaoDTM';
import { StyleSheet } from "react-native";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FormPage">
        <Stack.Screen name="FormPage" component={FormPage} options={{headerStyle: styles.header, headerTitleStyle: styles.title}} />
        <Stack.Screen name="AlertDTM" component={AlertDTM} options={{headerStyle: styles.header, headerTitleStyle: styles.title}} />
        <Stack.Screen name="NaoDTM" component={NaoDTM} options={{headerStyle: styles.header, headerTitleStyle: styles.title}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
      backgroundColor: '#2871AE',
  },
  title: {
    color: '#fff'
  }
});