import { StackNavigator } from 'react-navigation';

import TicketsStack from './TicketsStack';
import QRCodeScreen from '../screens/QRCodeScreen';

export default StackNavigator({
  tickets: {
    screen: TicketsStack,
  },
  qrCode: {
    screen: QRCodeScreen,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
