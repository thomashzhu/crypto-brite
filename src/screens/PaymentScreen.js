import React, { Component } from 'react';
import {Clipboard, SafeAreaView, Platform, NativeModules, View, Text, StyleSheet, Alert, Image, TouchableOpacity, ImageBackground, Dimensions } from 'react-native';
import ModalHeader from '../components/common/ModalHeader';

export default class componentName extends Component {

  constructor(props){
    super(props);
    this.state = {
      isPaymentLoading: true,
      payment: null,
      isPaidStatus: null 
    }
  }

  componentDidMount(){
    this.postPayment()  
  }

  _setContent() {
    Clipboard.setString(this.state.payment["payment"].address);
  }

  async getPaymentStatus() {  

    var details = {
      paymentID: this.state.payment["payment"].txn_id
    }

    var formBody = []

    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      
      formBody.push(encodedKey + "=" + encodedValue);
    }

    formBody = formBody.join("&");

    try {
      let response = await fetch(`https://brite-payment.herokuapp.com/api/payment/status`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
      });

      let responseJSON = null
      
      console.log(response.status)

      if (response.status === 200) {
        responseJSON = await response.json();
        console.log(responseJSON)

        this.setState({
          isPaidStatus: Boolean(Number(responseJSON.paymentStatus))
        })

      } else {
        responseJSON = await response.json();
        const error = responseJSON.message

        console.log(responseJSON)

        this.setState({ errors: responseJSON.errors })
        Alert.alert('Unable to get payment', `Reason.. ${error}!`)
      }
    } catch (error) {
      this.setState({ isLoading: false, response: error })

      console.log(error)

      Alert.alert('Unable to get payment. Please try again later')
    }
  }

  async postPayment() {

    var details = {
      'amount': 0.002,
    }

    var formBody = []

    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      
      formBody.push(encodedKey + "=" + encodedValue);
    }

    formBody = formBody.join("&");

    try {
      let response = await fetch(`https://brite-payment.herokuapp.com/api/payment`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody,
      });

      let responseJSON = null
      
      console.log(response.status)

      if (response.status === 200) {
        responseJSON = await response.json();
        console.log(responseJSON)

        this.setState({
          isPaymentLoading: false, 
          payment: responseJSON,
        })

        this.getPaymentStatus()

      } else {
        responseJSON = await response.json();
        const error = responseJSON.message

        console.log(responseJSON)

        this.setState({ errors: responseJSON.errors })
        Alert.alert('Unable to get your feed', `Reason.. ${error}!`)
      }
    } catch (error) {
      this.setState({ isLoading: false, response: error })

      console.log(error)

      Alert.alert('Unable to get the feed. Please try again later')
    }
  }

  render() {
    const { payment, isPaymentLoading } = this.state 
    const width = Dimensions.get('window').width * 0.9
 
    return (
      <SafeAreaView style={styles.safeAreaView}>
      <ImageBackground
        source={{uri: 'https://media.coindesk.com/uploads/2017/07/markets-glass-e1500865734219.jpg'}}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        <ModalHeader
        headerLeft={() => (
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Text style={styles.headerButton}>Close</Text>
          </TouchableOpacity>
        )}
        title="Payment"
        headerRight={() => (
          <TouchableOpacity onPress={() => {}}>
            <Text style={[styles.headerButton, { color: '#FFF' }]}>Close</Text>
          </TouchableOpacity>
        )}
        />

          {!isPaymentLoading &&
          <View style={styles.container}>
          <View style={styles.paymentMessageContainer}>
            <Text style={styles.messageText}> Complete this payment to recieve ticket. </Text>
          </View>

            <Image 
              source={{uri: payment["payment"].qrcode_url }}
              style={{
                width: width,
                height: width,
                borderRadius: 10,
              }}
            />
              <View style={styles.paymentContainer}>
              <Text style={styles.labelText}> Amount  </Text>
              <Text style={styles.infoText}> {payment["payment"].amount} DASH</Text>

                <Text style={styles.labelText}> Payment Address:  </Text>
                <Text style={styles.infoText}> {payment["payment"].address} </Text>

                <TouchableOpacity 
                  style={styles.buttonContainer}
                  onPress={this._setContent()}
                >
                  <View style={styles.button}>
                    <Text style={styles.buttonText}> Copy Address </Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          }
      </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
 
  safeAreaView: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 0 : NativeModules.StatusBarManager.HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  labelText: {
    color: '#7f7f7f',
    fontSize: 12,
    padding: 5,
  },

  infoText: {
    fontSize: 14,
    paddingBottom: 10,
    paddingLeft: 5,
  },

  messageText: {
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width :Dimensions.get('window').width * 0.7,
    height: 40,
    backgroundColor: '#E8787B',
    borderRadius: 20,
  },

  paymentContainer: {
    marginTop: 10,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 10,
    marginBottom: 10,
  }, 

  paymentMessageContainer: {
    marginTop: 10,
    backgroundColor: '#fff',
    width: Dimensions.get('window').width * 0.9,
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },

  buttonText: {
    color: '#fff'
  },

});