import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text} from 'react-native';
import {Divider} from '../../components/divider';
import {Article} from '../../components/article';

export const ArticleScreen = ({route}) => {
  const {title, urlToImage, content, author, source} = route.params.data;
  return (
    <View style={styles.mainContainer}>
      <Divider />
      <View style={styles.container}>
        <Article title={title} description={content} image={urlToImage} />
        <Text style={styles.description}>Author: {author}</Text>
        <Text style={styles.description}>From {source.name}</Text>
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

ArticleScreen.propTypes = {
  /**
   * navigation route object
   */
  route: PropTypes.object.isRequired,
};

ArticleScreen.defaultProps = {
  route: {
    params: {
      data: {
        title: 'Article title',
        content: 'Content...',
        author: 'author',
        source: {
          name: 'source',
        },
        urlToImage:
          'https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/ebv2ppyibu0yhvlecqlh.png',
      },
    },
  },
};
