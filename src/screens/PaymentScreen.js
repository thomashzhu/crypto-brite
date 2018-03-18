import React from 'react';
import { StyleSheet, SafeAreaView, Platform, NativeModules, Button } from 'react-native';

const PaymentScreen = props => (
  <SafeAreaView style={styles.safeAreaView}>
    <Button
      title="Cancel"
      onPress={() => props.navigation.goBack()}
    />
    <Button
      title="Paid"
      onPress={() => {
        const { navigation } = props;
        const { event } = navigation.state.params;

        navigation.navigate('qrCode', { event });
      }}
    />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : NativeModules.StatusBarManager.HEIGHT,
  },
});

export default PaymentScreen;
