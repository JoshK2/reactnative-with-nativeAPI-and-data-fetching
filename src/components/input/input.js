import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, TextInput} from 'react-native';

const styles = StyleSheet.create({
  input: {width: '100%', height: 40, borderColor: 'gray', borderWidth: 1},
});

const Input = ({placeHolder, onChangeText, value, style}) => {
  return (
    <TextInput
      style={StyleSheet.flatten([styles.input, style])}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeHolder}
    />
  );
};

Input.propTypes = {
  /**
   * input place holder
   */
  placeHolder: PropTypes.string.isRequired,
  /**
   * on change text function
   */
  onChangeText: PropTypes.func.isRequired,
  /**
   * value
   */
  value: PropTypes.string.isRequired,
  /**
   * optional style
   */
  style: PropTypes.object,
};

Input.defaultProps = {
  placeHolder: 'place holder',
  value: '',
};

export {Input};
