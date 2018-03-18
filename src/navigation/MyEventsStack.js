import { StackNavigator } from 'react-navigation';

import MyEventsScreen from '../screens/MyEventsScreen';
import DetailEventScreen from '../screens/DetailEventScreen';

export default StackNavigator({
  myEvents: {
    screen: MyEventsScreen,
  },
  detailEvent: {
    screen: DetailEventScreen,
  },
});
