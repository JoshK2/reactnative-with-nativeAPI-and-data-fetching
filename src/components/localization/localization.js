import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export class Localization extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>Localization</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});
