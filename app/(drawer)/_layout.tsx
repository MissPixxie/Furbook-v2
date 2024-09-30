import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
{
  CustomDrawer;
}
import { Feather, FontAwesome } from "@expo/vector-icons";
import { Link, router, useLocalSearchParams, useNavigation } from "expo-router";
import { Pressable } from "react-native";
import { Colors } from "@rneui/themed";
import { DrawerActions } from "@react-navigation/native";
import { Header } from "@/app/(drawer)/_header";
import { CustomDrawer } from "./_customDrawer";

import { appId, baseUrl } from "../../atlasConfig.json";
import SignIn from "../sign-in";

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
