import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Divider} from '../../components/divider/divider';

export const LocalizationScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Divider />
      <View style={styles.container}>
        <Text style={styles.description}>Localization Screen</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'flex-start',
    width: '90%',
    marginLeft: '5%',
  },
  container: {
    shadowColor: '#cdcdcd',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 30,
  },
  image: {width: 'auto', height: 300, marginBottom: 10},
  title: {fontSize: 18, fontWeight: 'bold', marginBottom: 10},
  description: {marginBottom: 10},
});
