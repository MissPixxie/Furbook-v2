import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { CustomDrawer } from "@/components/customDrawer";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{ drawerPosition: "right" }}
        drawerContent={({ navigation }) => (
          <CustomDrawer navigation={navigation} />
        )}
      />
    </GestureHandlerRootView>
  );
}
