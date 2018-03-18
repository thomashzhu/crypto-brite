import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator } from 'react-navigation';
import PropTypes from 'prop-types';
import { SimpleLineIcons } from '@expo/vector-icons';

import EventsModal from './EventsModal';
import TicketsScreen from '../screens/TicketsScreen';
import MyEventsModal from './MyEventsModal';

const EventsTabIcon = ({ tintColor }) => (
  <SimpleLineIcons
    name="calendar"
    color={tintColor}
    size={Platform.OS === 'ios' ? 22 : 22}
  />
);
EventsTabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

const TicketsTabIcon = ({ tintColor }) => (
  <SimpleLineIcons
    name="handbag"
    color={tintColor}
    size={Platform.OS === 'ios' ? 22 : 22}
  />
);
TicketsTabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

const AccountTabIcon = ({ tintColor }) => (
  <SimpleLineIcons
    name="user"
    color={tintColor}
    size={Platform.OS === 'ios' ? 22 : 22}
  />
);
AccountTabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

export default TabNavigator({
  allEvents: {
    screen: EventsModal,
    navigationOptions: {
      tabBarLabel: 'Events',
      tabBarIcon: EventsTabIcon,
    },
  },
  tickets: {
    screen: TicketsScreen,
    navigationOptions: {
      tabBarLabel: 'Tickets',
      tabBarIcon: TicketsTabIcon,
    },
  },
  myEvents: {
    screen: MyEventsModal,
    navigationOptions: {
      tabBarLabel: 'Favorites',
      tabBarIcon: AccountTabIcon,
    },
  },
}, {
  initialRouteName: 'allEvents',
  tabBarPosition: 'bottom',
  animationEnabled: Platform.OS !== 'ios',
  swipeEnabled: Platform.OS !== 'ios',
  tabBarOptions: {
    showIcon: true,
    showLabel: true,
    activeTintColor: '#E8787B',
    inactiveTintColor: '#999',
    style: {
      backgroundColor: '#FFF',
      padding: Platform.OS === 'ios' ? 5 : 0,
    },
    indicatorStyle: {
      backgroundColor: '#FFF',
    },
    labelStyle: {
      fontSize: 12,
    },
  },
});
