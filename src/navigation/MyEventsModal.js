import { StackNavigator } from 'react-navigation';

import MyEventsStack from './MyEventsStack';
import PaymentScreen from '../screens/PaymentScreen';
import QRCodeScreen from '../screens/QRCodeScreen';

export default StackNavigator({
  myEvents: {
    screen: MyEventsStack,
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
