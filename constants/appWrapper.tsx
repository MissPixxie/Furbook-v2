// import React, { Children, useState } from "react";
// import {
//   SafeAreaView,
//   View,
//   Text,
//   TextInput,
//   FlatList,
//   Pressable,
//   ActivityIndicator,
//   StyleSheet,
// } from "react-native";
// import {
//   Realm,
//   RealmProvider,
//   useRealm,
//   useQuery,
//   AppProvider,
//   UserProvider,
// } from "@realm/react";
// import { ObjectSchema } from "realm";
// import { appId, baseUrl } from "../atlasConfig.json";
// import { Task } from "../schemas/taskSchema";

// const LoadingIndicator = () => {
//   return (
//     <View style={styles.activityContainer}>
//       <ActivityIndicator size="large" />
//     </View>
//   );
// };

// export const AppWrapper = ({ children }: any) => {
//   return (
//     <AppProvider id={appId} baseUrl={baseUrl}>
//       <RealmProvider
//         schema={[Task]}
//         sync={{
//           flexible: true,
//           user: currentUser,
//           onError: (_session, error) => {
//             // Show sync errors in the console
//             console.error(error);
//           },
//         }}
//         fallback={LoadingIndicator}
//       >
//         {children}
//       </RealmProvider>
//     </AppProvider>
//   );
// };

// const styles = StyleSheet.create({
//   activityContainer: {
//     flex: 1,
//     flexDirection: "row",
//     justifyContent: "space-around",
//     padding: 10,
//   },
// });
