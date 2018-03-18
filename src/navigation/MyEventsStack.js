import { StackNavigator } from 'react-navigation';

import MyEventsScreen from '../screens/MyEventsScreen';

export default StackNavigator({
  myEvents: {
    screen: MyEventsScreen,
  },
});
