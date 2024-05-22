import { Image, ScrollView } from "react-native";
import NEWS_BANNER_DATA from "../../news_banner_data.json";
import styles from "./banner-image.style";

const BannerImage = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {NEWS_BANNER_DATA.map((bannerData) => (
        <Image
          key={bannerData.id}
          source={{ uri: bannerData.imageUrl }}
          style={styles.image}
        />
      ))}
    </ScrollView>
  );
};

export default BannerImage;
