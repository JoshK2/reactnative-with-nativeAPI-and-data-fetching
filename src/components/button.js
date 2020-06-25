import React from 'react';
import {StyleSheet, TouchableHighlight, Text} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#00a5e2',
    borderRadius: 15,
    paddingHorizontal: 9,
    paddingVertical: 9,
    width: '100%',
    height: 40,
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
});

const Button = ({title, onPress, buttonStyle, textStyle}) => {
  return (
    <TouchableHighlight
      style={StyleSheet.flatten([styles.button, buttonStyle])}
      onPress={onPress}
      underlayColor="#404040">
      <Text style={StyleSheet.flatten([styles.text, textStyle])}>{title}</Text>
    </TouchableHighlight>
  );
};

Button.propTypes = {
  /**
   * button title
   */
  title: PropTypes.string.isRequired,
  /**
   * on press function
   */
  onPress: PropTypes.func.isRequired,
  /**
   * optional button style
   */
  buttonStyle: PropTypes.object,
  /**
   * optional text style
   */
  textStyle: PropTypes.object,
};

Button.defaultProps = {
  title: 'Click',
};

export {Button};
