import { Button, View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  withSpring,
  EventHandler,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  backgroundColor?: string;
}

export default function BouncyBox({ children, backgroundColor }: Props) {
  const width = useSharedValue(100);

  // const handlePress = () => {
  //   width.value = withSpring(width.value + 50);
  // };

  const pressed = useSharedValue<boolean>(false);

  const tap = Gesture.Tap()
    .onBegin(() => {
      pressed.value = true;
    })
    .onFinalize(() => {
      pressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ scale: withTiming(pressed.value ? 1 : 1.5) }],
  }));

  const styles = StyleSheet.create({
    box: {
      height: 100,
      width: 100,
      borderRadius: 5,
      padding: 3,
      backgroundColor: backgroundColor,
    },
  });

  return (
    <GestureDetector gesture={tap}>
      <Animated.View style={[styles.box, animatedStyles]}>
        {children}
      </Animated.View>
    </GestureDetector>
  );
}
