import { StackNavigator } from 'react-navigation';

import EventsStack from './EventsStack';
import PaymentScreen from '../screens/PaymentScreen';
import QRCodeScreen from '../screens/QRCodeScreen';

export default StackNavigator({
  events: {
    screen: EventsStack,
  },
  payment: {
    screen: PaymentScreen,
  },
  qrCode: {
    screen: QRCodeScreen,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
