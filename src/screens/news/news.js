import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Input} from '../../components/input';
import {Button} from '../../components/button';
import {Divider} from '../../components/divider';
import {Article} from '../../components/article';
import {getNews} from '../../api/news';

export class NewsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      articles: props.articles || [],
    };
  }

  onChangeText = (text) => this.setState({searchValue: text});

  handleSearch = async () => {
    const {onSearch = getNews} = this.props;
    const {searchValue} = this.state;
    const news = await onSearch(searchValue);
    this.setState({articles: news.articles});
  };

  render() {
    const {navigation} = this.props;
    const {searchValue, articles} = this.state;
    return (
      <View style={styles.container}>
        <Divider />
        <Input
          placeHolder="Search"
          onChangeText={this.onChangeText}
          value={searchValue}
        />
        <Divider />
        <Button title="Search" onPress={this.handleSearch} />
        <Divider />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          {articles &&
            articles.map((article, index) => {
              return (
                <Article
                  key={index}
                  title={article.title}
                  description={article.description}
                  image={article.urlToImage}
                  onPress={() =>
                    navigation &&
                    navigation.navigate('Article', {data: article})
                  }
                />
              );
            })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    width: '90%',
    marginLeft: '5%',
  },
});

NewsScreen.propTypes = {
  /**
   * articles arrays of object
   */
  articles: PropTypes.object,
  /**
   * onSearch function to get data from api
   */
  onSearch: PropTypes.func,
};
