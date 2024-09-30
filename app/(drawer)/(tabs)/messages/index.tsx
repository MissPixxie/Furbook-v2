import { AddDog } from "@/components/AddDog";
import { CustomButton } from "@/components/customButton";
import { MessageItem } from "@/components/MessageItem";
import { Message } from "@/constants/types";
import { ThemeContext } from "@/constants/ThemeContext";
import { Link, Stack, useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import {
  Button,
  FlatList,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  useFonts,
  Manrope_800ExtraBold,
  Manrope_600SemiBold,
  Manrope_300Light,
  Manrope_200ExtraLight,
} from "@expo-google-fonts/manrope";
import { Divider } from "@rneui/themed/dist/Divider";

export default function MessagesScreen() {
  const [data, setData] = useState<Message[]>();
  const router = useRouter();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [updateFromDetailScreen, setUpdateFromDetailScreen] = useState(false);
  let [fontsLoaded, fontError] = useFonts({
    Manrope_800ExtraBold,
    Manrope_600SemiBold,
    Manrope_300Light,
    Manrope_200ExtraLight,
  });

  const { colors } = theme;

  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const updateWhenMessageRemoved = (actionType: string, newState: boolean) => {
    if (actionType === "updated") {
      setUpdateFromDetailScreen(newState);
      getData();
    } else {
      console.log("something went wrong");
    }
  };

  async function getData() {}

  useEffect(() => {
    const getMessages = async () => {
      const res = await fetch("http://localhost:8081/api/messages");
      const data = await res.json();
      setData(data);
    };
    getMessages();
  }, []);

  const itemFromList = ({ item }: { item: Message }) => {
    return (
      <TouchableOpacity
        onPress={() => {
          router.navigate(`/messages/${item._id}`);
        }}
      >
        <MessageItem item={item} />
      </TouchableOpacity>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      width: "100%",
      padding: 10,
      marginVertical: 10,
      backgroundColor: colors.background,
      borderRadius: 10,
      shadowColor: "#080808",
      shadowOffset: { width: -1, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 2,
      elevation: 4,
    },
    textTitle: {
      fontFamily: "Manrope_600SemiBold",
      color: colors.text,
      fontSize: 20,
    },
    textStyle: {
      fontFamily: "Manrope_300Light",
      color: colors.text,
      fontSize: 16,
    },
  });

  return (
    <View accessible={true} style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={itemFromList}
        keyExtractor={(item) => item._id}
        style={styles.container}
      />
      <Divider />
    </View>
  );
}
