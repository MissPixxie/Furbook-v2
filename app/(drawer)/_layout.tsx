import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
{
  CustomDrawer;
}
import { Link, router, useLocalSearchParams, useNavigation } from "expo-router";
import { CustomDrawer } from "./_customDrawer";

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
