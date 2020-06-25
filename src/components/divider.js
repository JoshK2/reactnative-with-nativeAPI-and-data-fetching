import React from 'react';
import PropTypes from 'prop-types';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  divider: {
    backgroundColor: 'transparent',
    height: 10,
  },
});

const Divider = ({style}) => (
  <View style={StyleSheet.flatten([styles.divider, style])} />
);

Divider.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export {Divider};
