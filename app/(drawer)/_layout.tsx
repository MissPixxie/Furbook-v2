import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { CustomDrawer } from "@/components/CustomDrawer";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { Link, router, useLocalSearchParams, useNavigation } from "expo-router";
import { Pressable } from "react-native";
import { Colors } from "@rneui/themed";
import { DrawerActions } from "@react-navigation/native";
import { Header } from "@/components/header";

export default function DrawerLayout() {
  const navigation = useNavigation();
  const params = useLocalSearchParams<{ user: string }>();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerPosition: "right",
          headerTitle: "",
          headerShown: false,
          // header: () => <Header />,
        }}
        drawerContent={({ navigation }) => (
          <CustomDrawer navigation={navigation} />
        )}
      >
        {/* <Drawer.Screen name="index" /> */}
        <Drawer.Screen name="(tabs)" />
      </Drawer>
    </GestureHandlerRootView>
  );
}
