import React, { Component } from 'react';
import { StyleSheet, Dimensions, Platform, View, Image, Text, TouchableWithoutFeedback, TouchableOpacity, AsyncStorage, DeviceEventEmitter } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

class EventCard extends Component {
  constructor(props) {
    super(props);

    const { event } = props;

    this.state = {
      isFavorited: event.isFavorited,
    };
  }
  onEventClick = () => {
    const { navigation, event } = this.props;
    const { navigate } = navigation;

    navigate('detailEvent', { event });
  }

  onFavoriteButtonPress = async () => {
    const { isFavorited } = this.state;
    const { event } = this.props;

    try {
      event.isFavorited = !isFavorited;
      if (!isFavorited) {
        await AsyncStorage.setItem(event.id, JSON.stringify(event));
      } else {
        await AsyncStorage.removeItem(event.id);
      }
      DeviceEventEmitter.emit('setMyEventsUpdated');
    } catch (error) {
      // Error saving data
    }

    this.setState({ isFavorited: !isFavorited });
  }

  render = () => {
    const { event } = this.props;
    const {
      image, name, description, venue,
    } = event;
    const { date: venueDateString, name: venueName } = venue;
    const venueDate = new Date(venueDateString);

    const MONTH_NAMES = [
      'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
      'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC',
    ];

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          style={styles.imageContainer}
          onPress={this.onEventClick}
        >
          <View>
            <Image
              style={styles.image}
              source={{ uri: image }}
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

              <TouchableOpacity onPress={this.onFavoriteButtonPress}>
                <View style={styles.circleButton}>
                  <SimpleLineIcons
                    name="heart"
                    color={this.state.isFavorited ? 'red' : null}
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
              <Text style={styles.monthText}>{MONTH_NAMES[venueDate.getMonth()]}</Text>
              <Text style={styles.dayText}>{venueDate.getDate()}</Text>
            </View>

            <View style={styles.eventInfo}>
              <Text style={styles.eventName}>{name}</Text>
              <Text style={styles.eventVenue}>{venueName}</Text>
              <Text style={styles.eventDescription}>{description}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  };
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
    bottom: Platform.OS === 'ios' ? -28 : 16,
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
    marginTop: Platform.OS === 'ios' ? 32 : 16,
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
