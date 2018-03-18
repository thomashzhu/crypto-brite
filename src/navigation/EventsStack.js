import { StackNavigator } from 'react-navigation';

import EventsScreen from '../screens/EventsScreen';

export default StackNavigator({
  events: {
    screen: EventsScreen,
  },
});
