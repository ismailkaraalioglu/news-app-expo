import { useEffect, useState } from "react";
import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import NewsCard from "../components/news-card";
import BannerImage from "../components/banner-image";
import { Article } from "../models/article";

interface Headline {
  articles: Article[];
}

export default function NewsScreen() {
  const [headlines, setHeadlines] = useState<Headline | null>(null);
  const insets = useSafeAreaInsets();
  const language = "tr";
  const API_KEY = "55d51f93924344e083d2f96a773ff0d1";
  const url = `https://newsapi.org/v2/everything?language=${language}&q=${"technology"}&apiKey=${API_KEY}`;

  async function fetchData() {
    (await fetch(url)).json().then((res) => setHeadlines(res));
  }

  useEffect(() => {
    fetchData();
  }, []);

  const renderNews = ({ item }: { item: Article }) => <NewsCard news={item} />;

  return (
    <View style={{ ...styles.container, paddingTop: insets.top }}>
      <Text style={styles.headerText}>News App</Text>
      <FlatList
        ListHeaderComponent={BannerImage}
        data={headlines && headlines.articles}
        renderItem={renderNews}
        keyExtractor={(item) => item.publishedAt}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eceff1",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 50,
    paddingVertical: 3,
  },
  bannerImage: {
    height: Dimensions.get("window").height / 5,
    width: Dimensions.get("window").width / 2,
  },
});
