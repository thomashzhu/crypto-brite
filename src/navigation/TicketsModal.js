import { StackNavigator } from 'react-navigation';

import TicketsStack from './TicketsStack';
import PaymentScreen from '../screens/PaymentScreen';
import QRCodeScreen from '../screens/QRCodeScreen';

export default StackNavigator({
  tickets: {
    screen: TicketsStack,
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
