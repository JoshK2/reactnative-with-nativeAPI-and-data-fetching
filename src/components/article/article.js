import React from 'react';
import {StyleSheet, View, Text, Image, TouchableHighlight} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
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

const Article = ({title, image, description, onPress}) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor="transparent">
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Image style={styles.image} source={{uri: image}} />
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableHighlight>
  );
};

Article.propTypes = {
  /**
   * article title
   */
  title: PropTypes.string.isRequired,
  /**
   * image url
   */
  image: PropTypes.string.isRequired,
  /**
   * article description
   */
  description: PropTypes.string,
  /**
   * on press function
   */
  onPress: PropTypes.func,
};

Article.defaultProps = {
  title: 'Article title',
  image:
    'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ebv2ppyibu0yhvlecqlh.png',
};

export {Article};
