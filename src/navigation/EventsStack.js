import { StackNavigator } from 'react-navigation';

import EventsScreen from '../screens/EventsScreen';
import DetailEventScreen from '../screens/DetailEventScreen';

export default StackNavigator({
  events: {
    screen: EventsScreen,
  },
  detailEvent: {
    screen: DetailEventScreen,
  },
});
