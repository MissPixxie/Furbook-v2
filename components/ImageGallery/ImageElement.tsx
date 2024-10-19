import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import Animated, { useSharedValue } from "react-native-reanimated";

type ImageItem = {
  id: number;
  url: ImageSourcePropType | undefined;
  date: string;
};

export default function ImageElement({ url }: ImageItem) {
  const { width } = useWindowDimensions();
  const widthOfImage = width / 2 - 8;

  const styles = StyleSheet.create({
    imageStyle: {
      //flex: 1,
      maxWidth: widthOfImage,
      //alignSelf: "stretch",
      maxHeight: 200,
    },
  });

  return <Image source={url} style={styles.imageStyle} />;
}
