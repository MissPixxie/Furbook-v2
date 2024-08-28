// import { StyleSheet } from "react-native";
// import * as Speech from "expo-speech";
// import EditScreenInfo from "@/components/EditScreenInfo";
// import { Text, View } from "@/components/Themed";
// import { Button } from "@rneui/themed";
// import { DrawerToggleButton } from "@react-navigation/drawer";
// import { CustomCard } from "@/components/CustomCard";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { ThemeContext } from "@/constants/ThemeContext";
// import { useContext, useState } from "react";

// import {
//   useFonts,
//   Manrope_800ExtraBold,
//   Manrope_600SemiBold,
//   Manrope_300Light,
//   Manrope_200ExtraLight,
// } from "@expo-google-fonts/manrope";
// import { Tabs } from "expo-router";
// import { Header } from "@/app/(drawer)/_header";

// export default function HomeScreen() {
//   const { theme, toggleTheme } = useContext(ThemeContext);
//   const [data, setData] = useState();
//   const { colors } = theme;
//   let [fontsLoaded, fontError] = useFonts({
//     Manrope_800ExtraBold,
//     Manrope_600SemiBold,
//     Manrope_300Light,
//     Manrope_200ExtraLight,
//   });

//   const speak = () => {
//     const thingToSay = "Morocco";
//     Speech.speak(thingToSay);
//   };

//   const getUser = async () => {
//     // const response = await fetch("http://localhost:8081/api/users/");
//     // console.log(response);
//     // const data = await response.json();
//     // console.log(data);
//     // setData(data);
//   };

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       rowGap: 15,
//       backgroundColor: colors.background,
//       paddingHorizontal: 15,
//     },
//     title: {
//       fontSize: 20,
//       color: colors.text,
//     },
//     text: {
//       fontSize: 16,
//       color: colors.text,
//     },
//     separator: {
//       marginVertical: 30,
//       height: 1,
//       width: "80%",
//       alignSelf: "center",
//     },
//   });

//   return (
//     <SafeAreaView style={styles.container} accessible={true}>
//       <CustomCard gradientColors={colors.gradientCard} rowGap={10}>
//         <Text style={styles.title}>Saved Events</Text>
//         <View style={{ backgroundColor: "transparent" }}>
//           <Text style={styles.text}>Hello</Text>
//         </View>
//         <View style={{ backgroundColor: "transparent" }}>
//           <Text style={styles.text}>Hello</Text>
//         </View>
//       </CustomCard>
//       {/* <Button title="test" onPress={speak} /> */}
//       <View
//         style={styles.separator}
//         lightColor="green"
//         darkColor="rgba(255,255,255,0.1)"
//       />
//       <CustomCard gradientColors={colors.gradientCard}>
//         <View style={{ backgroundColor: "transparent" }}>
//           <Text style={styles.text}>Planerade saker</Text>
//         </View>
//         <View style={{ backgroundColor: "transparent" }}>
//           <Text style={styles.text}>Hello</Text>
//         </View>
//       </CustomCard>
//       <Button onPress={getUser} title="Get user" />
//     </SafeAreaView>
//   );
// }

import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  FlatList,
  Pressable,
} from "react-native";
import { Realm, RealmProvider, useRealm, useQuery } from "@realm/react";
import { ObjectSchema } from "realm";

class Task extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  description!: string;
  isComplete!: boolean;
  createdAt!: Date;

  static generate(description: string) {
    return {
      _id: new Realm.BSON.ObjectId(),
      description,
      createdAt: new Date(),
    };
  }

  static schema: ObjectSchema = {
    name: "Task",
    primaryKey: "_id",
    properties: {
      _id: "objectId",
      description: "string",
      isComplete: { type: "bool", default: false },
      createdAt: "date",
    },
  };
}

export default function Home() {
  const realm = useRealm();
  const tasks = useQuery(Task);
  const [newDescription, setNewDescription] = useState("");

  return (
    <SafeAreaView>
      <View
        style={{ flexDirection: "row", justifyContent: "center", margin: 10 }}
      >
        <TextInput
          value={newDescription}
          placeholder="Enter new task description"
          onChangeText={setNewDescription}
        />
        <Pressable
          onPress={() => {
            realm.write(() => {
              realm.create("Task", Task.generate(newDescription));
            });
            setNewDescription("");
          }}
        >
          <Text>➕</Text>
        </Pressable>
      </View>
      <FlatList
        data={tasks.sorted("createdAt")}
        keyExtractor={(item) => item._id.toHexString()}
        renderItem={({ item }) => {
          return (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                margin: 10,
              }}
            >
              <Pressable
                onPress={() =>
                  realm.write(() => {
                    item.isComplete = !item.isComplete;
                  })
                }
              >
                <Text>{item.isComplete ? "✅" : "☑️"}</Text>
              </Pressable>
              <Text style={{ paddingHorizontal: 10 }}>{item.description}</Text>
              <Pressable
                onPress={() => {
                  realm.write(() => {
                    realm.delete(item);
                  });
                }}
              >
                <Text>{"🗑️"}</Text>
              </Pressable>
            </View>
          );
        }}
      ></FlatList>
    </SafeAreaView>
  );
}

// export  function AppWrapper() {
//   return (
//     <RealmProvider schema={[Task]}>
//       <TaskApp />
//     </RealmProvider>
//   );
// }

// function TaskApp() {
//   const realm = useRealm();
//   const tasks = useQuery(Task);
//   const [newDescription, setNewDescription] = useState("");

//   return (
//     <SafeAreaView>
//       <View
//         style={{ flexDirection: "row", justifyContent: "center", margin: 10 }}
//       >
//         <TextInput
//           value={newDescription}
//           placeholder="Enter new task description"
//           onChangeText={setNewDescription}
//         />
//         <Pressable
//           onPress={() => {
//             realm.write(() => {
//               realm.create("Task", Task.generate(newDescription));
//             });
//             setNewDescription("");
//           }}
//         >
//           <Text>➕</Text>
//         </Pressable>
//       </View>
//       <FlatList
//         data={tasks.sorted("createdAt")}
//         keyExtractor={(item) => item._id.toHexString()}
//         renderItem={({ item }) => {
//           return (
//             <View
//               style={{
//                 flexDirection: "row",
//                 justifyContent: "center",
//                 margin: 10,
//               }}
//             >
//               <Pressable
//                 onPress={() =>
//                   realm.write(() => {
//                     item.isComplete = !item.isComplete;
//                   })
//                 }
//               >
//                 <Text>{item.isComplete ? "✅" : "☑️"}</Text>
//               </Pressable>
//               <Text style={{ paddingHorizontal: 10 }}>{item.description}</Text>
//               <Pressable
//                 onPress={() => {
//                   realm.write(() => {
//                     realm.delete(item);
//                   });
//                 }}
//               >
//                 <Text>{"🗑️"}</Text>
//               </Pressable>
//             </View>
//           );
//         }}
//       ></FlatList>
//     </SafeAreaView>
//   );
//}
