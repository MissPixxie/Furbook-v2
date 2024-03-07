import React from "react";
import { Entypo, FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { SafeAreaProvider } from "react-native-safe-area-context";

const TabLayout = () => {
  const colorScheme = useColorScheme();

  return (
    <SafeAreaProvider>
      <Tabs
        screenOptions={{
          //tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          // Disable the static render of the header on web
          // to prevent a hydration error in React Navigation v6.
          headerShown: useClientOnlyValue(false, true),
          tabBarShowLabel: false,
          tabBarInactiveTintColor: "#51951a",
          tabBarActiveTintColor: "#294d0d",
        }}
      >
        <Tabs.Screen
          name="(drawer)"
          options={{
            title: "",
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={26} color={color} />
            ),
            headerRight: () => (
              <Link href="/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <FontAwesome
                      name="info-circle"
                      size={25}
                      color={Colors[colorScheme ?? "light"].text}
                      style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                    />
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />
        <Tabs.Screen
          name="mydogs"
          options={{
            title: "My Dogs",
            headerTitleAlign: "center",
            tabBarIcon: ({ color }) => (
              <Ionicons name="paw" size={26} color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="(toptabs)"
          options={{
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
            headerShown: false,
            title: "",
            tabBarIcon: ({ color }) => (
              <FontAwesome name="envelope" size={26} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="notifications"
          options={{
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
