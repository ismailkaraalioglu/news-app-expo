import { FC } from "react";
import { Image, Text, View } from "react-native";
import styles from "./news-card.style";
import { Article } from "../../models/article";

interface IProps {
  news: Article;
}

const NewsCard: FC<IProps> = ({ news }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: news.urlToImage }} />
      <View style={styles.innerContainer}>
        <Text style={styles.title}>{news.title}</Text>
        <Text style={styles.description}>{news.description}</Text>
        <Text style={styles.author}>{news.author}</Text>
      </View>
    </View>
  );
};

export default NewsCard;
