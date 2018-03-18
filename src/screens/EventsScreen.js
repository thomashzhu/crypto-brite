import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, DeviceEventEmitter } from 'react-native';
import PropTypes from 'prop-types';

import EventCard from '../components/common/EventCard';

const DATA = require('../data.json');

class EventsScreen extends Component {
  static navigationOptions = {
    title: 'CRYPTO BRITE',
    headerStyle: {
      backgroundColor: '#E8787B',
      borderBottomWidth: 0,
    },
    headerTintColor: '#FFF',
  };

  constructor(props) {
    super(props);

    this.state = {
      events: DATA.events,
      updatedEvent: null,
    };
  }

  componentWillMount() {
    DeviceEventEmitter.addListener('setEventsUpdated', ({ updatedEvent }) => {
      this.eventUpdated({ updatedEvent });
    });
  }

  eventUpdated = ({ updatedEvent }) => {
    this.setState({ updatedEvent });
    this.forceUpdate();
  }

  renderEvent = ({ item: event, index }) => {
    if (index >= 1) {
      const { updatedEvent } = this.state;
      
      return (
        <EventCard
          event={updatedEvent && updatedEvent.id === event.id ? updatedEvent : event}
          navigation={this.props.navigation}
          onFavoriteButtonPressEmit={() => {
            DeviceEventEmitter.emit('setMyEventsUpdated');
          }}
        />
      );
    }

    return (
      <View style={{ height: headerHeight }}>
        
        <View style={styles.header}>
          <Text style={styles.introText}>What{'\''}s good in</Text>
          
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>San Francisco</Text>
          </View>
        </View>

        <View style={styles.headerBackground} />
      </View>
    );
  };

  render() {
    return (
      <FlatList
        data={this.state.events}
        keyExtractor={(event, index) => index}
        renderItem={this.renderEvent}
      />
    );
  }
}

EventsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const padding = 16;
const headerHeight = 136;

const styles = StyleSheet.create({
  header: {
    padding,
    height: headerHeight,
    position: 'absolute',
  },
  headerBackground: {
    backgroundColor: '#E8787B',
    height: headerHeight * 1.6,
    zIndex: -1000,
  },
  introText: {
    fontSize: 16,
    color: '#FFF',
  },
  locationContainer: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  locationText: {
    fontWeight: '200',
    fontSize: 38,
    textDecorationLine: 'underline',
    color: '#FFF',
  },
});

export default EventsScreen;
