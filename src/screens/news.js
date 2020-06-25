import React, {Component} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {Input} from '../components/input';
import {Button} from '../components/button';
import {Divider} from '../components/divider';
import {Article} from '../components/article';
import {getNews} from '../api/news';

export class NewsScreen extends Component {
  state = {
    searchValue: '',
    articles: [],
  };

  onChangeText = (text) => this.setState({searchValue: text});

  onSearch = async () => {
    const {searchValue} = this.state;
    const news = await getNews(searchValue);
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
        <Button title="Search" onPress={this.onSearch} />
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
