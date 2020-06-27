import React from 'react';
import Expo from 'expo'
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';
import DashboardScreen from './src/screens/Dashboard';

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <DashboardScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
