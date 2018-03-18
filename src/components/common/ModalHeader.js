import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

const ModalHeader = props => (
  <View style={styles.container}>
    <View style={styles.notchBackground} />

    { props.headerLeft && props.headerLeft() }

    <Text style={styles.headerText}>
      {props.title}
    </Text>

    { props.headerRight && props.headerRight() }
  </View>
);

ModalHeader.propTypes = {
  headerLeft: PropTypes.func,
  title: PropTypes.string.isRequired,
  headerRight: PropTypes.func,
};

ModalHeader.defaultProps = {
  headerLeft: null,
  headerRight: null,
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 12,
    paddingRight: 12,
    backgroundColor: '#FFF',
  },
  notchBackground: {
    backgroundColor: '#FFF',
    position: 'absolute',
    top: -44,
    left: 0,
    right: 0,
    height: 44, // Height of iPhone X notch (max of port. and land.)
  },
  headerText: {
    color: '#FD746C',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ModalHeader;
