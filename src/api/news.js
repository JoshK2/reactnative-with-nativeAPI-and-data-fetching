import {newsApiKey} from './config';

export const getNews = async (keyword) => {
  const response = await fetch(
    `http://newsapi.org/v2/everything?q=${keyword}&from=2020-06-23&to=2020-06-23&sortBy=popularity&apiKey=${newsApiKey}`,
  );
  const json = await response.json();
  return json;
};
