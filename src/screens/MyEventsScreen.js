import React, { Component } from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';

import EventCard from '../components/common/EventCard';

const data = require('../data.json');

class EventsScreen extends Component {
  static navigationOptions = {
    title: 'MY EVENTS',
    headerStyle: {
      backgroundColor: '#E8787B',
      borderBottomWidth: 0,
    },
    headerTintColor: '#FFF',
  };

  renderEvent = ({ event }) => (
    <EventCard
      event={event}
      navigation={this.props.navigation}
    />
  );

  render = () => (
    <FlatList
      data={data.events}
      keyExtractor={(event, index) => index}
      renderItem={({ item: event, index }) => this.renderEvent({ event, index })}
    />
  );
}

EventsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default EventsScreen;
