import React from 'react';
import {TextInput} from 'react-native';

const Input = ({placeHolder, onChangeText, value}) => {
  return (
    <TextInput
      style={{width: '100%', height: 40, borderColor: 'gray', borderWidth: 1}}
      onChangeText={onChangeText}
      value={value}
      placeholder={placeHolder}
    />
  );
};

export {Input};
