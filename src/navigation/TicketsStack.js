import { StackNavigator } from 'react-navigation';

import TicketsScreen from '../screens/TicketsScreen';
import DetailEventScreen from '../screens/DetailEventScreen';

export default StackNavigator({
  tickets: {
    screen: TicketsScreen,
  },
  detailEvent: {
    screen: DetailEventScreen,
  },
});
