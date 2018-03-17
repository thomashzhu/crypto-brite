import React, { Component } from 'react';
import { StyleSheet, Platform, NativeModules, SafeAreaView, View, Text, FlatList } from 'react-native';
import EventCard from '../components/EventCard';

class EventsScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  renderEvent = ({ index }) => {
    if (index >= 1) {
      return <EventCard />;
    }

    return (
      <View style={{ height: headerHeight }}>
        
        <View style={styles.header}>
          <Text style={styles.introText}>What{'\''}s good in</Text>
          <Text style={styles.locationText}>San Francisco</Text>
        </View>

        <View style={styles.headerBackground} />
      </View>
    );
  };

  render = () => (
    <FlatList
      data={[{}, {}, {}, {}, {}, {}, {}]}
      keyExtractor={(event, index) => index}
      renderItem={({ index }) => this.renderEvent({ index })}
    />
  );
}

const padding = 16;
const headerHeight = 136;

const styles = StyleSheet.create({
  header: {
    padding,
    height: headerHeight,
    position: 'absolute',
  },
  headerBackground: {
    backgroundColor: '#E8787B',
    height: headerHeight * 1.6,
    zIndex: -1000,
  },
  introText: {
    flex: 1,
    height: headerHeight / 3,
    fontSize: 16,
    color: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationText: {
    flex: 2,
    fontWeight: '200',
    fontSize: 38,
    textDecorationLine: 'underline',
    color: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EventsScreen;
