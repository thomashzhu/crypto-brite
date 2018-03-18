import React, { Component } from 'react';
import { StyleSheet, Dimensions, View, Image, Text, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
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
        <View>
          <Image
            style={styles.image}
            source={{ uri: 'https://static.pexels.com/photos/154147/pexels-photo-154147.jpeg' }}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity>
              <View style={styles.circleButton}>
                <SimpleLineIcons
                  name="share"
                  size={24}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.circleButton}>
                <SimpleLineIcons
                  name="heart"
                  size={24}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 120,
    height: 56,
    paddingRight: 0,
    position: 'absolute',
    bottom: -28,
    right: padding,
  },
  circleButton: {
    height: 48,
    width: 48,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#999',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
  },
  eventText: {
    flexDirection: 'row',
    marginTop: 32,
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
