import { StackNavigator } from 'react-navigation';

import PaymentScreen from './PaymentScreen';
import QRCodeScreen from './QRCodeScreen';

export default StackNavigator({
  payment: {
    screen: PaymentScreen,
  },
  qrCode: {
    screen: QRCodeScreen,
  },
});
