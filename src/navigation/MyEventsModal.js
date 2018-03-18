import { StackNavigator } from 'react-navigation';

import MyEventsStack from './MyEventsStack';
import QRCodeScreen from '../screens/QRCodeScreen';

export default StackNavigator({
  myEvents: {
    screen: MyEventsStack,
  },
  qrCode: {
    screen: QRCodeScreen,
  },
}, {
  mode: 'modal',
  headerMode: 'none',
});
