import React from 'react';
import { StyleSheet, Platform, NativeModules, SafeAreaView } from 'react-native';
import EventsScreen from './src/screens/EventsScreen';

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.safeAreaView}>
        <EventsScreen />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : NativeModules.StatusBarManager.HEIGHT,
  },
});
