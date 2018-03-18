import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Button } from 'react-native-elements';
import MapView from 'react-native-maps';


export default class App extends React.Component {
  static navigationOptions = {
    title: 'EVENT',
    headerStyle: {
      backgroundColor: '#E8787B',
      borderBottomWidth: 0,
    },
    headerTintColor: '#FFF',
  };

  constructor(props){
    super(props);

    this.state = {
      screen: null,
      description: '',
      isPaid: true
    };
  }

  onPurchaseButtonPress = async () => {
    const { event } = this.props.navigation.state.params;
    this.props.navigation.navigate('payment', { event });
  }

  renderTicketButton = () => {
    const { event } = this.props.navigation.state.params;

    if (event.transaction) {
      return null;
    }

    return (
      <View style={styles.purchaseContainer}>
        <TouchableOpacity>
          <Button
            onPress={this.onPurchaseButtonPress}
            title='Tickets'
            color='white'
            backgroundColor='#E8787B'
            rounded
          />
        </TouchableOpacity>
      </View>
    );
  }


  render() {
    const event = this.props.navigation.state.params.event;
    console.log(event);

    return (
      <View style={styles.mainContainer}>
          <ScrollView style={styles.scrollViewContainer}>
            <View style={styles.bannerImageContainer}>
              <Image
                source={{ uri: event.image }}
                  style={{
                    flex: 1,
                    height: 200,
                    width: '100%'
                  }}
                  resizeMode='cover'
              />
            </View>
            {/* bannerImageContainer End */}

            <View style={styles.generalInformationContainer}>
              <Text style={styles.generalInformationHeaderTitleStyle}>{event.name}</Text>
              <Text style={styles.byTextStyle}>{event.type}</Text>
              
              <View style={styles.detailContainer}>
                <SimpleLineIcons 
                  name='calendar'
                  size={25}
                >

                </SimpleLineIcons>
                <View style={styles.subDetailColumnContainer}>
                  <Text style={styles.detailMainText}>{event.venue['date']}</Text>
                  <Text style={styles.detailSubText}>{event.venue['time'].start} - {event.venue['time'].end}</Text>
                </View>
              </View>

              <View style={styles.detailContainer}>
                <SimpleLineIcons 
                  name='location-pin'
                  size={25}
                >

                </SimpleLineIcons>
                <View style={styles.subDetailColumnContainer}>
                  <Text style={styles.detailMainText}>{event.venue.name}</Text>
                  <Text style={styles.detailSubText}>{event.venue.address}</Text>
                </View>
              </View>

              <View style={styles.detailContainer}>
                <SimpleLineIcons 
                  name='tag'
                  size={25}
                >

                </SimpleLineIcons>
                <View style={styles.subDetailColumnContainer}>
                  <Text style={styles.detailMainText}>${event.price}</Text>
                  <Text style={styles.detailSubText}>on Crypto-Brite</Text>
                </View>
              </View>

            </View>
            {/* generalInformationContainer End */}

            <View style={styles.aboutEventContainer}>
                <Text style={styles.aboutTitleStyle}>About</Text>
                <Text 
                style={styles.descriptionStyle}
                numberOfLines= {4}
                ellipsizeMode='tail'
                >{event.description}</Text>
            </View>
            {/* aboutEventContainer End */}

            <View style={styles.locationContainer}>
              <Text style={styles.locationTitleStyle}>Location</Text>
              <Text style={styles.locationSubTitleStyle}>{event.venue.name}</Text>
              <View style={styles.mapImageContainer}>
                <Image
                  source={{ uri: 'http://joomly.net/frontend/web/images/googlemap/map.png' }}
                    style={{
                      height: 200,
                      width: '100%'
                    }}
                    resizeMode='cover'
                />
              </View>
            </View>
            {/* locationContainer End */}
          </ScrollView>
          {/* scrollView End */}

          {this.renderTicketButton()}

        </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1
  },

  scrollViewContainer: {
    flexGrow: 1,
  },

  bannerImageContainer: {
    flex: 1,
    width: '100%',
    height: 200,
  },
  // banner end

  generalInformationContainer: {
    flex: 2,
    width: '100%',
    height: 375,    
  },
  generalInformationHeaderTitleStyle: {
    fontSize: 25,
    textAlign: 'left',
    marginTop: 30,
    marginLeft: 15,
  },
  byTextStyle: {
    fontSize: 15,
    textAlign: 'left',
    marginTop: 10,
    marginLeft: 15,
  },
  detailContainer: {
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    marginTop: 30,
  },
  subDetailColumnContainer: {
    marginLeft: 20,
  },
  detailMainText: {
    marginBottom: 5,
  },
  detailSubText: {
    color: 'gray'
  },
  // general information end

  aboutEventContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    width: '100%',
    height: 200,
  },
  aboutTitleStyle: {
    fontSize: 15,
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  descriptionStyle: {
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  // about event end

  locationContainer: {
    flex: 2,
    width: '100%',
    height: 400,    
  },
  locationTitleStyle: {
    fontSize: 15,
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  locationSubTitleStyle: {
    fontSize: 15,
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
    fontWeight: 'bold'
  },
  mapImageContainer: {
    padding: 10,
    width: '100%',
    height: 275,
  },
  // location information end

  purchaseContainer: {
    width: '100%',
    height: 50,
  }

});
