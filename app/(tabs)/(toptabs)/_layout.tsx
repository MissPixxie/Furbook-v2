import {
  createMaterialTopTabNavigator,
  MaterialTopTabNavigationOptions,
  MaterialTopTabNavigationEventMap,
  MaterialTopTabBar,
} from "@react-navigation/material-top-tabs";
import React, { useContext, useEffect, useState } from "react";
import { Slot, withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

const Layout = () => {
  return (
    <MaterialTopTabs>
      <MaterialTopTabs.Screen name="dogs" />
      <MaterialTopTabs.Screen name="events" />
      <MaterialTopTabs.Screen name="places" />
    </MaterialTopTabs>
  );
};

export default Layout;
