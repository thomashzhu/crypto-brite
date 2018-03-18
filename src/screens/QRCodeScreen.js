import React from 'react';
import { StyleSheet, SafeAreaView, Platform, NativeModules, Dimensions, TouchableOpacity, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import PropTypes from 'prop-types';

import ModalHeader from '../components/common/ModalHeader';

const QRCodeScreen = ({ navigation }) => (
  <SafeAreaView style={styles.safeAreaView}>
    <ModalHeader
      headerLeft={() => (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.headerButton}>Close</Text>
        </TouchableOpacity>
      )}
      title="QR Code"
      headerRight={() => (
        <TouchableOpacity onPress={() => {}}>
          <Text style={styles.headerButton}>Share</Text>
        </TouchableOpacity>
      )}
    />

    <View style={styles.qrCodeContainer}>
      <QRCode
        size={size}
        value="sfhacks"
        // logo={{ uri: "" }}
        logoSize={size * 0.15}
        logoBackgroundColor="transparent"
      />
    </View>
  </SafeAreaView>
);

QRCodeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const { width, height } = Dimensions.get('window');
const size = Math.min(width, height) * 0.7;

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : NativeModules.StatusBarManager.HEIGHT,
  },
  headerButton: {
    color: '#E8787B',
    fontSize: 14,
    fontWeight: 'bold',
  },
  qrCodeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default QRCodeScreen;
