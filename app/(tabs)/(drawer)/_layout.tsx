import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { CustomDrawer } from "@/components/customDrawer";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { Link, useNavigation } from "expo-router";
import { Pressable } from "react-native";
import { Colors } from "@rneui/themed";
import { DrawerActions } from "@react-navigation/native";
import { Header } from "@/components/header";

export default function DrawerLayout() {
  const navigation = useNavigation();

  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          drawerPosition: "right",
          headerTitle: "",
          headerShown: true,
          header: () => <Header />,
        }}
        drawerContent={({ navigation }) => (
          <CustomDrawer navigation={navigation} />
        )}
      >
        <Drawer.Screen
          name="index"
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
