import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Image, Text, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

class EventCard extends Component {
  onEventClick = () => {
    const { navigation, event } = this.props;
    const { navigate } = navigation;

    navigate('qrCode', { event });
  }

  render = () => (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        style={styles.imageContainer}
        onPress={this.onEventClick}
      >
        <Image
          style={styles.image}
          source={{ uri: 'https://static.pexels.com/photos/154147/pexels-photo-154147.jpeg' }}
        />
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback>
        <View
          style={styles.eventText}
          onPress={this.onEventClick}
        >
          <View style={styles.dateText}>
            <Text style={styles.monthText}>MAR</Text>
            <Text style={styles.dayText}>17</Text>
          </View>

          <View style={styles.eventInfo}>
            <Text style={styles.eventName}>SF Hacks 2018</Text>
            <Text style={styles.eventVenue}>SFSU</Text>
            <Text style={styles.eventDescription}>Coding all the living long days...</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

EventCard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  event: PropTypes.object.isRequired,
};

const padding = 16;
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding,
    borderRadius: 4,
  },
  imageContainer: {
    borderRadius: 4,
  },
  image: {
    borderRadius: 8,
    height: (width - 2 * padding) / 2,
    resizeMode: 'cover',
  },
  eventText: {
    flexDirection: 'row',
    marginTop: 18,
    height: 56,
  },
  dateText: {
    paddingLeft: 16,
    paddingRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  monthText: {
    color: '#CDAA96',
    marginBottom: 2,
  },
  dayText: {
    
  },
  eventInfo: {
    justifyContent: 'space-between',
  },
  eventName: {
    fontSize: 16,
  },
  eventVenue: {
    color: '#8A8A8A',
    fontSize: 10,
  },
  eventDescription: {
    color: '#8A8A8A',
    fontSize: 10,
  },
});

export default EventCard;
