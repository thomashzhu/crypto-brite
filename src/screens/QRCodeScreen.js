import React, { Component } from 'react';
import { ImageBackground, StyleSheet, SafeAreaView, Platform, NativeModules, Dimensions, TouchableOpacity, Text, View, AsyncStorage, DeviceEventEmitter } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';
import ModalHeader from '../components/common/ModalHeader';

class QRCodeScreen extends Component {
  render = () => {
    const { event } = this.props.navigation.state.params;
    return(

    <SafeAreaView style={styles.safeAreaView}>

    <ImageBackground 
      source={{uri: event.image }}
      style={{
        width: '100%', 
        height: '100%'
      }}
    >
    
      <ModalHeader
        headerLeft={() => (
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.headerButton}>Close</Text>
          </TouchableOpacity>
        )}
        title="Ticket"
        headerRight={() => (
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.headerButton}>Share</Text>
          </TouchableOpacity>
        )}
        />
    <View style={styles.ticketContainer}>

        <QRCode
          size={size}
          value="sfhacks"
          style={styles.qrCode}
          // logo={{ uri: "" }}
          logoSize={size * 0.15}
          logoBackgroundColor="transparent"
        />

        <View style={styles.infoContainer}>
          <Text style={styles.labelText}> Name </Text>
          <Text style={styles.infoText}> Ryan Liszewski </Text>

          <Text style={styles.labelText}> Event </Text>
          <Text style={styles.infoText}> {event.name}  </Text>

           <Text style={styles.labelText}> Time </Text>
           <Text style={styles.infoText}> {event.venue.time.start} - {event.venue.time.end} </Text>

          <Text style={styles.labelText}> Date </Text>
          <Text style={styles.infoText}> {event.venue.date} </Text>

          <Text style={styles.labelText}> Location </Text>
          <Text style={styles.infoText}>{event.venue.address} </Text>
        
        </View>

    </View>

      </ImageBackground> 
    </SafeAreaView>
    );
  }
}

QRCodeScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const { width, height } = Dimensions.get('window');
const size = Math.min(width, height) * 0.9;

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

  qrCode: {

  },

  infoContainer: {
    marginTop: 10,
    backgroundColor: '#fff',
    width: size,
    borderRadius: 10,
  },

  ticketContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  labelText: {
    color: '#7f7f7f',
    fontSize: 12,
    padding: 5,
  },

  infoText: {
    fontSize: 14,
    paddingBottom: 10,
    paddingLeft: 5,
  }
});

export default QRCodeScreen;
