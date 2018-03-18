import { StackNavigator } from 'react-navigation';

import EventsStack from './EventsStack';
import QRCodeScreen from '../screens/QRCodeScreen';

export default StackNavigator({
  events: {
    screen: EventsStack,
  },
  qrCode: {
    screen: QRCodeScreen,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
