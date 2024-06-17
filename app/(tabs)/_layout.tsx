import React, { useContext } from "react";
import { Entypo, FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeContext } from "@/constants/ThemeContext";
import { LinearGradient } from "expo-linear-gradient";

const TabLayout = () => {
  const colorScheme = useColorScheme();
  const { theme } = useContext(ThemeContext);
  const { colors } = theme;

  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          tabBarAccessibilityLabel: "Bottom tab navigation",
          headerShown: useClientOnlyValue(false, true),
          tabBarShowLabel: false,
          tabBarStyle: { position: "absolute", height: 55 },
          tabBarBackground: () => (
            <LinearGradient
              colors={colors.tabBar}
              style={{
                height: 70,
              }}
            />
          ),
          tabBarInactiveTintColor: "#51951a",
          tabBarActiveTintColor: "#294d0d",
        }}
      >
        <Tabs.Screen
          name="(drawer)"
          options={{
            tabBarAccessibilityLabel: "home button",
            title: "",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={26} color={color} />
            ),
            // headerRight: () => (
            //   <Link href="/modal" asChild>
            //     <Pressable>
            //       {({ pressed }) => (
            //         <FontAwesome
            //           name="info-circle"
            //           size={25}
            //           color={Colors[colorScheme ?? "light"].text}
            //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
            //         />
            //       )}
            //     </Pressable>
            //   </Link>
            // ),
          }}
        />
        <Tabs.Screen
          name="mydogs"
          options={{
            tabBarAccessibilityLabel: "my dogs button",
            headerTitleStyle: { color: colors.text },
            title: "My Dogs",
            headerShown: false,
            headerStyle: { backgroundColor: colors.primary },
            headerTitleAlign: "center",
            tabBarIcon: ({ color }) => (
              <Ionicons name="paw" size={26} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="(toptabs)"
          options={{
            tabBarAccessibilityLabel: "search page button",
            title: "",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome name="search" size={26} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="messages"
          options={{
            tabBarAccessibilityLabel: "messages button",
            headerShown: false,
            title: "Messages",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="envelope" size={26} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="notifications"
          options={{
            tabBarAccessibilityLabel: "notifications button",
            headerShown: false,
            title: "",
            tabBarIcon: ({ color }) => (
              <Ionicons name="notifications" size={26} color={color} />
            ),
          }}
        />
      </Tabs>
    </SafeAreaProvider>
  );
};

export default TabLayout;
