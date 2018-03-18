import React, { Component } from 'react';
import { FlatList, DeviceEventEmitter, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';

import EventCard from '../components/common/EventCard';

const data = require('../tickets.json');

class TicketsScreen extends Component {
  static navigationOptions = {
    title: 'TICKETS',
    headerStyle: {
      backgroundColor: '#E8787B',
      borderBottomWidth: 0,
    },
    headerTintColor: '#FFF',
  };

  constructor(props) {
    super(props);

    this.state = {
      events: null,
    };
  }

  componentWillMount() {
    DeviceEventEmitter.addListener('setMyEventsUpdated', () => {
      this.loadEvents();
    });

    AsyncStorage.clear();
    this.loadEvents();
  }

  loadEvents = async () => {
    try {
      AsyncStorage.getAllKeys((error, keys) => {
        AsyncStorage.multiGet(keys, (err, events) => {
          this.setState({
            events: events.map((result, i, store) => (
              JSON.parse(store[i][1])
            )),
          });
        });
      });
    } catch (error) {
      // Error saving data
    }
  }

  renderEvent = ({ event }) => (
    <EventCard
      event={event}
      navigation={this.props.navigation}
      onFavoriteButtonPressEmit={() => {
        // this.loadEvents();
        // DeviceEventEmitter.emit('setEventsUpdated', { updatedEvent: event });
      }}
    />
  );

  render() {
    const { events } = this.state;
    if (!events) {
      return null;
    }

    return (
      <FlatList
        data={data.tickets}
        keyExtractor={(event, index) => index}
        renderItem={({ item: event, index }) => this.renderEvent({ event, index })}
      />
    );
  }
}

TicketsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default TicketsScreen;
